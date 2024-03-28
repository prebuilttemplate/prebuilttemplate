"use client";

import EmptyState from "@/components/templates/EmptyState";
import Template from "@/components/templates/Template";
import { TypeTemplate } from "@/types/templateTypes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { templates } from "@/data/templates";
import { NextjsIcon } from "@/components/icons";
import { useState } from "react";
import { FILTER_CONFIGS } from "@/data/filtersConfig";

const ICONS: { [key: string]: JSX.Element } = {
  nextjsIcon: <NextjsIcon />,
  astroIcon: <NextjsIcon />,
  reactIcon: <NextjsIcon />,
};

type TemplateKey = keyof TypeTemplate;

interface SelectedFilters {
  [key: string]: Set<string>;
}

export default function Home() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const toggleFilter = (
    filterType: TemplateKey,
    value: string,
    isChecked: boolean
  ) => {
    setSelectedFilters((prevFilters) => {
      const newFilters: SelectedFilters = { ...prevFilters };

      const currentSet = new Set(newFilters[filterType] || []);

      if (isChecked) {
        currentSet.add(value);
      } else {
        currentSet.delete(value);
      }

      newFilters[filterType] = currentSet;
      return newFilters;
    });
  };

  const filteredTemplates = templates.filter((template) =>
    Object.entries(selectedFilters).every(([filterType, selectedOptions]) => {
      return selectedOptions?.size > 0
        ? selectedOptions.has(
            template[filterType as keyof TypeTemplate] as string
          )
        : true;
    })
  );

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="py-12">
        <h1 className="text-center text-6xl font-bold">Find your Template</h1>
        <p className="mt-4 text-center text-xl">
          Jumpstart your app development process with pre-built templates!
        </p>
      </header>
      <section className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          {/* Filters */}
          <div className="hidden lg:block">
            <Accordion
              type="multiple"
              className="animate-none"
              defaultValue={["usecase"]}
            >
              {FILTER_CONFIGS.map((filter) => (
                <AccordionItem key={filter.id} value={filter.id}>
                  <AccordionTrigger className="py-3 text-sm">
                    <span className="font-medium">{filter.name}</span>
                  </AccordionTrigger>
                  <AccordionContent className=" animate-none">
                    <ul className="space-y-4">
                      {filter.options.map((option, optionIdx) => {
                        const IconComponent =
                          "icon" in option &&
                          ICONS[option.icon as keyof typeof ICONS];

                        return (
                          <li key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`${filter.id}-${optionIdx}`}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={(e) =>
                                toggleFilter(
                                  filter.id as keyof TypeTemplate,
                                  option.value,
                                  e.target.checked
                                )
                              }
                            />
                            <label
                              htmlFor={`${filter.id}-${optionIdx}`}
                              className="ml-3 text-sm flex items-center"
                            >
                              {IconComponent}
                              {option.label}
                            </label>
                          </li>
                        );
                      })}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Template grid */}
          <ul className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {filteredTemplates.length > 0 ? (
              filteredTemplates.map((template) => (
                <li key={template.id}>
                  <Template template={template} />
                </li>
              ))
            ) : (
              <EmptyState />
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}

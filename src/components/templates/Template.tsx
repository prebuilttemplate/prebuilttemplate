import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { TypeTemplate } from "@/types/templateTypes";
interface TemplateProps {
  template: TypeTemplate
}

const Template = ({ template }: TemplateProps) => {
  return (
    <Link href={`/templates/${template.slug}`} className="block">
      <Card className="w-full hover:shadow-lg hover:border-white transition-shadow">
        <Image
          src={template.imgSrc}
          alt={`${template.name} template image`}
          width={350}
          height={196}
          className="rounded-t-lg "
        />
        <CardHeader>
          <CardTitle>{template.name}</CardTitle>
          <CardDescription>{template.description}</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          by {template.author}
          <ExternalLink className="w-4 h-4" />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Template;

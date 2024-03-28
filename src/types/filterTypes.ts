export type FilterOptionWithoutIcon = {
    readonly value: string;
    readonly label: string;
  };
  
  export type FilterOptionWithIcon = {
    readonly value: string;
    readonly label: string;
    readonly icon: string;
  };
  
  export type FilterOption = FilterOptionWithoutIcon | FilterOptionWithIcon;
  
  export type FilterConfig = {
    readonly id: string;
    readonly name: string;
    readonly options: ReadonlyArray<FilterOption>;
  };
  
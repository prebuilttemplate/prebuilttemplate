import { Button } from "@/components/ui/button";
import HeaderBlock from "@/components/headerblock"; 
import { Checkbox } from "@/components/ui/checkbox"
import Block from "@/components/block";

export default function page() {
  return (
    <>
     <div>
      hello
        <HeaderBlock />
        <Block padding="px-8" showIcons={[1,0,1,0]} />
        <div className=" px-8 ">
          <div className="flex justify-center items-center max-w-4xl w-full mx-auto">
          <Block padding="p-0" />
        <Block padding="p-0" />
          </div>
       
        </div>
        <Button>Click me</Button>
        <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
     </div>
    </>
  );
}




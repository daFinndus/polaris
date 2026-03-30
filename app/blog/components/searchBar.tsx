import { Input } from "@/components/ui/input";

interface SearchbarProps {
  onChange: (value: string) => void;
}

export const Searchbar = ({ onChange }: SearchbarProps) => {
  return (
    <div className={"w-full flex mb-4"}>
      <Input
        className="border-2 h-12"
        placeholder={"Search for keywords..."}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

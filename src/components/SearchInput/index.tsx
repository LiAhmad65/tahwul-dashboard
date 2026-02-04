import { ICONS } from '../../utils/icons';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchInput = ({ 
  placeholder = 'Search', 
  value = '', 
  onChange 
}: SearchInputProps) => {
  return (
    <div className="relative w-full">
      <img 
        src={ICONS?.searchIcon} 
        alt="Search icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          w-full h-[34px] pl-10 pr-4
          bg-gray-bg border border-gray-border
          rounded-lg
          text-sm text-gray-600
          placeholder:text-gray-400
          focus:outline-none focus:ring-2 focus:ring-primary-dark-blue focus:ring-opacity-20
        "
      />
    </div>
  );
};

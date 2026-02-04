import { useState } from 'react';
import { ICONS } from '../../utils/icons';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const SearchInput = ({ 
  placeholder = 'Search', 
  onChange,
  className = ''
}: SearchInputProps) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <img 
        src={ICONS?.searchIcon} 
        alt="Search icon"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
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

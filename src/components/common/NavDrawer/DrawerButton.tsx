interface DrawerButtonProps {
  id: string;
  name: string;
  icon: string;
  route: string;
  isActive: boolean;
  onClick: () => void;
}

export const DrawerButton = ({ name, icon, isActive, onClick }: DrawerButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-r-lg transition-all duration-200
        ${isActive 
          ? 'bg-nav-selected text-white' 
          : 'text-gray-400 hover:bg-nav-selected hover:text-white'
        }
      `}
    >
      <img 
        src={icon} 
        alt={`${name} icon`}
        className={`w-5 h-5 ${isActive ? 'brightness-0 invert' : ''}`}
      />
      <span className="text-sm font-medium">{name}</span>
    </button>
  );
};

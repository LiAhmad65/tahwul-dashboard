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
        w-full flex items-center cursor-pointer gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-3 rounded-r-lg transition-all duration-200 min-w-0
        ${isActive 
          ? 'bg-nav-selected text-white' 
          : 'text-gray-400 hover:bg-nav-selected hover:text-white'
        }
      `}
    >
      <img 
        src={icon} 
        alt={`${name} icon`}
        className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 ${isActive ? 'brightness-0 invert' : ''}`}
      />
      <span className="text-xs sm:text-sm font-medium" style={{ wordBreak: 'break-word' }}>{name}</span>
    </button>
  );
};

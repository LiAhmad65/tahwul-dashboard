interface ButtonProps {
  label: string;
  icon?: string;
  onPress: () => void;
  iconPosition?: 'left' | 'right';
}

export const Button = ({ label, icon, onPress, iconPosition = 'right' }: ButtonProps) => {
  return (
    <button
      onClick={onPress}
      className="flex items-center cursor-pointer justify-center gap-2 px-4 py-2 bg-primary-dark-blue text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200 font-medium"
    >
      {icon && iconPosition === 'left' && (
        <img src={icon} alt="" className="w-5 h-5" />
      )}
      <span>{label}</span>
      {icon && iconPosition === 'right' && (
        <img src={icon} alt="" className="w-5 h-5" />
      )}
    </button>
  );
};

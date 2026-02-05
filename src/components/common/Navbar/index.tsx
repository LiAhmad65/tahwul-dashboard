import { SearchInput } from '../SearchInput';
import { ICONS } from '../../../utils/icons';

export const Navbar = () => {
  return (
    <nav className="border-b border-gray-border px-[24px] py-[13px] flex items-center justify-between">
      <SearchInput className="w-[318px]! ml-[40px]!" />
      
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative">
          <img 
            src={ICONS?.notificationIcon} 
            alt="Notifications"
            className="w-5 h-5"
          />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer bg-background-info p-2 rounded-4xl">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            <span className="text-xs font-medium text-gray-600">M</span>
          </div>
          <span className="text-sm font-medium text-gray-900">Mohamed</span>
          <svg 
            className="w-4 h-4 text-gray-600" 
            fill="none"
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

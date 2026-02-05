import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NAV_OPTIONS } from '../../../utils/constants';
import { ICONS } from '../../../utils/icons';
import { DrawerButton } from './DrawerButton';

export const NavDrawer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleDrawer}
        className={`
          absolute -right-4 top-[20px] z-50
          w-8 h-8 cursor-pointer rounded-full bg-white shadow-lg
          flex items-center justify-center
          transition-transform duration-300 ease-in-out
          hover:scale-110
          ${isOpen ? 'rotate-0' : 'rotate-180'}
        `}
      >
        <img 
          src={ICONS?.closeDrawerIcon} 
          alt="Toggle drawer"
          className="w-4 h-4"
        />
      </button>

      {/* Drawer */}
      <div
        className={`
          bg-primary-dark-blue px-[25px] py-6
          transition-all duration-300 ease-in-out
          overflow-hidden h-screen
          ${isOpen ? 'w-64' : 'w-0 px-0'}
        `}
      >
        {isOpen && (
          <>
            {/* Logo Section */}
            <div className="mb-8">
              <img 
                src={ICONS?.appLogo} 
                alt="TAHWUL Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Navigation Items */}
            <nav className="flex flex-col gap-2">
              {NAV_OPTIONS.map((option) => {
                const isActive = 
                  location.pathname === option.route ||
                  location.pathname.startsWith(option.route + '/') ||
                  location.pathname.includes(option.id);
                
                return (
                  <DrawerButton
                    key={option.id}
                    id={option.id}
                    name={option.name}
                    icon={option.icon}
                    route={option.route}
                    isActive={isActive}
                    onClick={() => navigate(option.route)}
                  />
                );
              })}
            </nav>
          </>
        )}
      </div>
    </div>
  );
};

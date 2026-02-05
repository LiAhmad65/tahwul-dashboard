import { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  onChange?: (tabId: string) => void;
}

export const Tabs = ({ tabs, defaultActiveTab, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div className="w-fit bg-light-gray-bg rounded-lg p-1 inline-flex gap-1">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 cursor-pointer rounded-lg transition-all text-sm font-normal duration-200 ${
              isActive
                ? 'bg-white text-primary-dark-blue font-medium shadow-sm'
                : 'bg-transparent text-gray-text hover:text-primary-dark-blue'
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

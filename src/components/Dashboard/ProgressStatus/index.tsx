import { StatusMap } from './StatusMap';

export const ProgressStatus = () => {
  return (
    <div className="bg-white border border-gray-border py-6 px-4 rounded-[10px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold text-primary-dark-blue">Progress Status</h2>
        <StatusMap />
      </div>
    </div>
  );
};

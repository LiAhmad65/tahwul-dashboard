import { STATUS_MAP } from '../../../../utils/constants';

export const StatusMap = () => {

  return (
    <div className="flex items-center gap-[18px] flex-wrap">
      {STATUS_MAP.map((status, index) => (
        <div key={index} className="flex items-center gap-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: status.color }}
          />
          <span className="text-sm text-gray-600">{status.label}</span>
        </div>
      ))}
    </div>
  );
};

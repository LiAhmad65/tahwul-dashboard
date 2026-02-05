export type StatusType = 'Approved' | 'Pending Review' | 'Rejected';

interface StatusBadgeProps {
  status: StatusType;
}

const getStatusBadgeClass = (status: StatusType) => {
  switch (status) {
    case 'Approved':
      return 'bg-status-approved-bg text-status-approved-text';
    case 'Pending Review':
      return 'bg-status-pending-bg text-status-pending-text';
    case 'Rejected':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusBadgeClass(status)}`}>
      {status}
    </span>
  );
};

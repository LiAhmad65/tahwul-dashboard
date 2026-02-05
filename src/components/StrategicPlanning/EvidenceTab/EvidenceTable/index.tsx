import { useState, useMemo } from 'react';
import { Section } from '../../../common/Section';
import { StatusBadge } from '../../../common/StatusBadge';
import { EVIDENCE_TABLE_DATA, EVIDENCE_TABLE_COLUMNS, type EvidenceDocument } from '../../../../utils/constants';

interface EvidenceTableProps {
  data?: EvidenceDocument[];
}

type SortDirection = 'asc' | 'desc';

const SortIcon = ({ direction }: { direction: SortDirection }) => {
  if (direction === 'asc') {
    return (
      <svg className="w-4 h-4 text-gray-text cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4 text-gray-text cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
};

const getCellValue = (doc: EvidenceDocument, key: keyof EvidenceDocument) => {
  if (key === 'status') {
    return <StatusBadge status={doc[key]} />;
  }
  return doc[key];
};

export const EvidenceTable = ({ data = EVIDENCE_TABLE_DATA }: EvidenceTableProps) => {
  const [sortKey, setSortKey] = useState<keyof EvidenceDocument | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');

  const handleSort = (key: keyof EvidenceDocument) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    if (!sortKey) {
      return data;
    }

    return [...data].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (aValue === bValue) return 0;

      if (sortKey === 'status') {
        const statusOrder = { 'Approved': 1, 'Pending Review': 2, 'Rejected': 3 };
        const aOrder = statusOrder[aValue as 'Approved' | 'Pending Review' | 'Rejected'];
        const bOrder = statusOrder[bValue as 'Approved' | 'Pending Review' | 'Rejected'];
        return sortDirection === 'asc' ? aOrder - bOrder : bOrder - aOrder;
      }

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return 0;
    });
  }, [data, sortKey, sortDirection]);

  return (
    <Section>
      <div className="overflow-x-auto rounded-[10px] overflow-hidden max-h-[600px] flex flex-col relative">
        <div className="overflow-y-auto flex-1">
          <table className="w-full">
            <thead className="sticky top-0 z-10">
              <tr className="bg-table-header-bg">
                {EVIDENCE_TABLE_COLUMNS.map((column, index) => (
                  <th
                    key={column.key}
                    className={`text-left py-3 px-2 text-xs font-normal whitespace-nowrap text-primary-dark-blue bg-table-header-bg ${
                      index === 0 ? 'rounded-tl-[10px] rounded-bl-[10px]' : ''
                    } ${
                      index === EVIDENCE_TABLE_COLUMNS.length - 1 ? 'rounded-tr-[10px] rounded-br-[10px]' : ''
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {column.label}
                      {column.sortable && (
                        <button
                          onClick={() => handleSort(column.key)}
                          className="cursor-pointer"
                        >
                          <SortIcon direction={sortKey === column.key ? sortDirection : 'asc'} />
                        </button>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedData.map((doc, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-bg ${
                    index !== sortedData.length - 1 ? 'border-b border-gray-border' : ''
                  }`}
                >
                  {EVIDENCE_TABLE_COLUMNS.map((column) => (
                    <td key={column.key} className={`py-6 px-2 text-sm font-normal text-primary-dark-blue whitespace-nowrap`}>
                      {getCellValue(doc, column.key)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Section>
  );
};

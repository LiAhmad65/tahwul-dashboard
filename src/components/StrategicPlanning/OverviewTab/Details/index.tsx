import { Section } from '../../../common/Section';
import { STRATEGIC_PLANNING_DETAILS } from '../../../../utils/constants';



/* 🔹 Reusable Bubble */
const Bubble = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gray-bg rounded-lg px-4 py-3 h-full">
    {children}
  </div>
);



export const Details = () => {
  return (
    <Section className="p-0!">
       <div className="w-full divide-y divide-gray-border">
         {STRATEGIC_PLANNING_DETAILS?.map((item, index) => (
          
          <div
            key={index}
            className="grid grid-cols-[220px_1px_1fr] gap-0"
          >
            {/* Label */}
            <div className="py-6 px-4">
              <Bubble>
                <span className="text-base font-regular text-primary-dark-blue">
                  {item?.label}
                </span>
              </Bubble>
            </div>

            {/* Vertical Divider */}
            <div className="bg-gray-border"></div>

            {/* Content */}
            <div className="py-6 px-4">
              <Bubble>
                {Array.isArray(item?.content) ? (
                  <div className="space-y-2 text-base font-normal text-primary-dark-blue">
                    {item.content?.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-base font-regular text-primary-dark-blue">
                    {item?.content}
                  </p>
                )}
              </Bubble>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

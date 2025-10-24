
import React from 'react';
import type { Report } from '../types';
import { useOnScreen } from '../hooks/useOnScreen';
import { PdfIcon } from './icons/IconComponents';

interface ReportsProps {
  content: { title: string };
  reportsData: Report[];
}

const ReportCard: React.FC<{ report: Report; index: number }> = ({ report, index }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`bg-ncn-medium-blue p-6 rounded-lg shadow-lg flex justify-between items-center animated-section ${isVisible ? 'is-visible' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center">
        <PdfIcon className="w-6 h-6 text-ncn-light-gray ltr:mr-4 rtl:ml-4" />
        <h3 className="text-lg font-semibold text-ncn-white">{report.title}</h3>
      </div>
      <a
        href={report.link}
        download
        className="bg-ncn-light-gray text-ncn-dark-blue font-semibold py-2 px-5 rounded-full hover:bg-ncn-white whitespace-nowrap transition-colors"
      >
        {report.buttonText}
      </a>
    </div>
  );
};

export const ReportsSection: React.FC<ReportsProps> = ({ content, reportsData }) => {
  const [titleRef, isTitleVisible] = useOnScreen<HTMLHeadingElement>({ threshold: 0.5 });
  return (
    <section id="reports" className="py-20 bg-ncn-dark-blue">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className={`text-3xl md:text-4xl font-bold text-ncn-white text-center mb-12 animated-section ${isTitleVisible ? 'is-visible' : ''}`}>
          {content.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {reportsData.map((report, index) => (
            <ReportCard key={index} report={report} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

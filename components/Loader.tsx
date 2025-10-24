
import React from 'react';
import { PulsingLogo } from './PulsingLogo';

export const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-ncn-dark-blue flex flex-col items-center justify-center z-50">
      <PulsingLogo className="w-24 h-24 mb-4" />
      <h1 className="text-xl text-ncn-light-gray font-poppins tracking-wider">
        NCN Development & Quality
      </h1>
    </div>
  );
};

import * as React from 'react';

const Mail: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  // Using a Heroicons outline envelope for a consistent, unclipped icon.
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m18 0L12 13.5 2.25 6.75"
    />
  </svg>
);

export default Mail;
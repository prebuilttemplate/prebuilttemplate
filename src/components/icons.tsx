export const PreIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M20,5 C20,5 45,5 45,30 C45,55 20,55 20,30 L20,5 Z M20,20 C25,20 30,25 30,30 C30,35 25,40 20,40"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const CrossIcon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export const NextjsIcon = ({ className, ...rest }: any) => {
  return (
    <svg
      fill="none"
      height="20"
      viewBox="0 0 180 180"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g mask="url(#mask0_292_290)">
        <circle
          cx="90"
          cy="90"
          fill="black"
          r="87"
          stroke="white"
          strokeWidth="6"
        ></circle>
        <path
          d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
          fill="url(#paint0_linear_292_290)"
        ></path>
        <rect
          fill="url(#paint1_linear_292_290)"
          height="72"
          width="12"
          x="115"
          y="54"
        ></rect>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_292_290"
          x1="109"
          x2="144.5"
          y1="116.5"
          y2="160.5"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint1_linear_292_290"
          x1="121"
          x2="120.799"
          y1="54"
          y2="106.875"
        >
          <stop stopColor="white"></stop>
          <stop offset="1" stopColor="white" stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

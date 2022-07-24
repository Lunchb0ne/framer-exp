const Logo: React.FC<{}> = () => {
  return (
    <svg
      height="100%"
      viewBox="0 0 329 235"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Logo Frame">
        <g id="Logo">
          <g id="Logo_2" filter="url(#filter0_i_1_8)">
            <path
              d="M10 224.384C30.9491 183.371 51.6194 145.82 71.4012 114M229 224.384C229 -55.3625 158.89 -26.7297 71.4012 114M100 224.384C198.944 30.6776 291.667 -85.8025 313.946 114M319 224.384C319 180.132 317.246 143.596 313.946 114M71.4012 114C209.965 46.1931 229 224.384 313.946 114"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1_8"
          x="5.99915"
          y="5.99933"
          width="317.001"
          height="226.386"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_8" />
        </filter>
      </defs>
    </svg>
  );
};

export default Logo;

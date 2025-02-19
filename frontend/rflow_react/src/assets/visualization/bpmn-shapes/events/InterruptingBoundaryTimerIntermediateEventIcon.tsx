import React from 'react';
import SvgTextFit from '../../SvgTextFit.tsx';

interface InterruptingBoundaryTimerIntermediateEventIconProps {
  name?: string;
}

const InterruptingBoundaryTimerIntermediateEventIcon: React.FC<InterruptingBoundaryTimerIntermediateEventIconProps> = ({ name='' }) => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <svg
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      viewBox="0 0 512 512"
      style={{ color: 'currentColor' }}
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <rect
        width="512"
        height="512"
        x="0"
        y="0"
        rx="30"
        fill="transparent"
        stroke="transparent"
        strokeWidth="0"
        strokeOpacity="100%"
        paintOrder="stroke"
      />
      <foreignObject x="0" y="0" width="512" height="512">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 2048 2048"
          fill="currentColor"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
          <g fill="currentColor">
            <path
              fill="currentColor"
              d="M1022.25 99.354c-2.444-.002-4.89.006-7.334.023c-412.558-3.386-800.77 306.32-891.402 708.55c-87.435 354.3 56.648 752.505 355.006 964.288c296.555 219.194 725.95 237.529 1036.42 36.05c305.059-189.587 481.982-565.096 423.872-920.972c-52.302-361.101-335.007-676.969-691.488-760.447c-73.525-18.4-149.297-27.446-225.074-27.492zm-10.482 99.76a743.33 743.33 0 0 1 20.084.189c383.36-3.87 741.982 297.903 803.761 676.43c65.396 341.934-110.432 714.481-420.203 875.894c-316.715 174.3-744.482 109.02-990.396-157.746c-252.123-260.217-301.106-691.754-106.819-999.09c144.231-237.98 414.797-394.577 693.573-395.678zm16.396 89.923c-6.767-.01-13.538.082-20.31.276c-353.001 0-676.47 292.145-714.391 643.107c-45.155 328.882 161.73 671.9 475.566 782.314c297.322 112.36 660.551 5.806 846.145-253.462c200.28-265.22 188.76-667.644-34.506-916.047c-136.51-158.937-342.73-255.904-552.504-256.188zm-4.494 98.049c4.512.007 9.023.064 13.535.17c312.462 0 597.211 263.662 621.057 575.303c32.575 296.857-171.148 599.682-461.219 675.7c-279.557 81.544-605.017-54.083-737.465-315.093c-142.555-263.797-69.451-624.647 174.35-803.34c110.668-85.565 249.876-132.95 389.742-132.74zm-7.96 197.863c-171.528 1.212-335.1 113.885-398.317 273.285c-65.79 155.801-29.42 347.57 88.884 468.442c115.027 123.83 304.555 169.464 463.307 111.428c166.36-56.675 288.573-221.231 292.976-397.19c8.863-170.945-93.874-339.97-248.558-412.566c-59.027-28.58-124.545-43.458-190.117-43.371a394.838 394.838 0 0 0-8.174-.028zm15.643 79.973c156.707.7 303.715 116.52 340.258 269.176c40.7 149.018-27.87 318.936-161.361 397.015c-136.3 85.544-328.47 62.745-440.395-53.11c-118.113-113.943-139.147-311.084-48.53-447.733c64.178-101.947 182.05-166.467 302.56-165.293c2.492-.048 4.981-.066 7.468-.055zm105.952 102.072l-119.903 217.527c-37.032 3.938-45.83 60.122-11.662 75.106c22.57 15.666 40.247-10.392 60.793-9.494h183.293v-50H1065.89l115.205-209.004l-43.79-24.135z"
            />
          </g>
        </svg>
      </foreignObject>
    </svg>

    <div
        style={{
          position: 'absolute',
          top: 'calc(100% + 2px)',
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <SvgTextFit
          text={name}
          style={{
            textAlign: 'center',
            padding: '2px',
            color: 'black',
          }}
        />
      </div>
  </div>
);

export default InterruptingBoundaryTimerIntermediateEventIcon;
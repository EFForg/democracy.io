import * as React from "react";

export default function ProgressBar() {
  return (
    <div id="progress-bar">
      <svg id="progress-bar-svg" viewBox="0 0 433 69">
        {/* drop shadow */}
        <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" result="blur-out" stdDeviation={2} />
          <feOffset in="blur-out" result="the-shadow" dx={0} dy={1} />
          <feColorMatrix
            in="the-shadow"
            result="color-out"
            type="matrix"
            values="0.05 0 0 0   0.05 0 0 0 0   0.05 0 0 0 0   0 0 0 0 .14 0"
          />
          <feBlend in="SourceGraphic" in2="color-out" mode="normal" />
        </filter>

        {/* background */}
        <path
          id="pb-background"
          d="M402.063 14.491c-9.245 0-16.992 6.322-19.212 14.872h-147.116c-2.22-8.55-9.968-14.872-19.212-14.872-9.245 0-16.992 6.322-19.212 14.872h-147.115c-2.22-8.55-9.968-14.872-19.212-14.872-10.975 0-19.872 8.897-19.872 19.872s8.897 19.872 19.872 19.872c9.245 0 16.992-6.322 19.212-14.872h147.115c2.22 8.55 9.968 14.872 19.212 14.872 9.245 0 16.992-6.322 19.212-14.872h147.115c2.22 8.55 9.968 14.872 19.212 14.872 10.975 0 19.872-8.897 19.872-19.872s-8.897-19.872-19.871-19.872z"
          fill="#fff"
          filter="url(#dropshadow)"
        />

        <ProgressBarItem cx={30.984} itemStatus={"active"} index={1} />
        <ProgressBarItem
          cx={30.984 + 185.54}
          itemStatus={"inactive"}
          index={2}
        />
        <ProgressBarItem
          cx={30.984 + 185.54 * 2}
          itemStatus={"inactive"}
          index={3}
        />
      </svg>

      <div className="labels">
        <span className="first">Enter your address</span>
        <span className="second">Choose your representatives</span>
        <span className="third">Write your message</span>
      </div>
    </div>
  );
}

interface ProgressBarItemProps {
  cx: number;
  itemStatus: "active" | "inactive" | "completed";
  index: number;
}
function ProgressBarItem(props: ProgressBarItemProps) {
  const { cx, itemStatus } = props;

  let innerShape;
  if (itemStatus === "active") {
    innerShape = (
      <circle
        cx={cx}
        cy="34.363"
        r="2.646"
        fill={itemStatus === "active" ? "#F93469" : "#EE325A"}
      />
    );
  } else if (itemStatus === "completed") {
    innerShape = (
      <path
        d="M38.192 30.996c0 .248-.087.459-.26.632l-6.734 6.734-1.265 1.265c-.174.174-.384.26-.632.26s-.459-.087-.632-.26l-1.265-1.265-3.367-3.367c-.174-.174-.26-.384-.26-.632s.087-.459.26-.632l1.265-1.265c.174-.174.384-.26.632-.26s.459.087.632.26l2.734 2.744 6.101-6.11c.174-.174.384-.26.632-.26s.459.087.632.26l1.265 1.265c.175.172.262.383.262.631z"
        fill="#EE325A"
      />
    );
  } else {
    innerShape = null;
  }

  return (
    <g>
      {/* Outer circle  */}
      <circle
        cx={cx}
        cy="34.363"
        r="14.646"
        stroke="#EE325A"
        strokeWidth={1}
        strokeMiterlimit={10}
        fill="none"
      />
      {innerShape}
    </g>
  );
}

// import React from "react";
// import ReactDOM from "react-dom/client";
import "./index.css";

export const gnb = (
  <div className="flex justify-between mx-auto my-4 w-[1050px]">
    <div className="flex text-l-base items-center gap-3">
      <span>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Icon / Hamburger" clipPath="url(#clip0_6280_1801)">
            <path
              id="Vector"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0H16V1.7H0V0ZM0 6.15H16V7.85H0V6.15ZM0 12.3H16V14H0V12.3Z"
              fill="#333333"
            />
          </g>
          <defs>
            <clipPath id="clip0_6280_1801">
              <rect width="16" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      카테고리
    </div>
    <ul className="flex text-l-base">
      <li className="w-[150px] h-6 py-2">
        <a href="/">신상품</a>
      </li>
      <li className="w-[150px] h-6 py-2">
        <a href="/">베스트</a>
      </li>
      <li className="w-[150px] h-6 py-2">
        <a href="/">알뜰쇼핑</a>
      </li>
      <li className="w-[150px] h-6 py-2">
        <a href="/">특가/혜택</a>
      </li>
    </ul>
    <div className="text-p-sm text-gray-500 border-primary border rounded-[16px] px-2 py-1 text-center">
      <span className="text-primary">샛별·낮</span> 배송안내
    </div>
  </div>
);

import React, { FC } from "react";
import { Link } from "react-router-dom";

import { BreadcrumbItemProps } from "../../../typings/ui/components/Breadcrumb";

import arrow from "../../assets/arrow.svg";

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({
  title,
  isLastItem = true,
  to,
}) => {
  return (
    <>
      <Link
        to={to}
        className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
      >
        {title}
      </Link>
      {!isLastItem && (
        <span className="flex-shrink-0 mx-2 h-5 w-5 text-gray-400">
          <svg viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </>
  );
};

export default BreadcrumbItem;

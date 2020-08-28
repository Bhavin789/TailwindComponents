import React, { FC } from "react";
import { Link } from "react-router-dom";

import { BreadcrumbItemProps } from "../../typings/ui/components/Breadcrumb";

import arrow from "../../assets/arrow.svg";

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ title, hasArrow, to }) => {
  return (
    <li className="flex items-center">
      <Link to={to}>{title}</Link>
      {hasArrow && (
        <span className="fill-current w-3 h-3 mx-3">
          <img src={arrow} alt={arrow} />
        </span>
      )}
    </li>
  );
};

export default BreadcrumbItem;

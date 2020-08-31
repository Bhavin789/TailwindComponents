import React, { FC } from "react";

import BreadcrumbItem from "./BreadcrumbItem";

import BreadcrumbProps from "../../../typings/ui/components/Breadcrumb";

const Breadcrumb: FC<BreadcrumbProps> = ({ items = [] }: BreadcrumbProps) => {
  return (
    <nav
      className="hidden sm:flex items-center text-sm leading-5 font-medium"
      aria-label="Breadcrumb"
    >
      {items.length &&
        items.map((item, index) => {
          const title = item.title;
          const toRoute = item.to;
          const isLastItem = index === items.length - 1;

          return (
            <BreadcrumbItem
              title={title}
              to={toRoute}
              isLastItem={isLastItem}
            />
          );
        })}
    </nav>
  );
};

export default Breadcrumb;

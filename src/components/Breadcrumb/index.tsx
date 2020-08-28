import React, { FC } from "react";

import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb: FC<{}> = () => {
  return (
    <nav
      className="hidden sm:flex items-center text-sm leading-5 font-medium"
      aria-label="Breadcrumb"
    >
      <BreadcrumbItem title={"Home"} to="/" />
      <BreadcrumbItem title={"About"} to="/" />
      <BreadcrumbItem title={"Info"} to="/" hasArrow={false} />
    </nav>
  );
};

export default Breadcrumb;

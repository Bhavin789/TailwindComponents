import React, { FC } from "react";

import BreadcrumbItem from "./BreadcrumbItem";

const Breadcrumb: FC<{}> = () => {
  return (
    <nav className="text-black font-bold my-8" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <BreadcrumbItem title={"Home"} to="/" hasArrow={true} />
        <BreadcrumbItem title={"About"} to="/" hasArrow={true} />
        <BreadcrumbItem title={"Info"} to="/" hasArrow={false} />
      </ol>
    </nav>
  );
};

export default Breadcrumb;

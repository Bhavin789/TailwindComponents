import React, { FC } from "react";

import withBreadcrumbs from "./components/utilities/HOCs/withBreadcrumbs";

import breadcrumbData from "../src/data/breadcrumbs";

const items = breadcrumbData.home;

const Test: FC<{}> = () => {
  return <div> This is a test component</div>;
};

export default withBreadcrumbs<{}>({ Component: Test, breadcrumbItems: items });

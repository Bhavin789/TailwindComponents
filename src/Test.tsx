import React, { FC } from "react";

import withBreadcrumbs from "./components/utilities/HOCs/withBreadcrumbs";

const items = [
  { title: "Dashboard", to: "/" },
  { title: "Profile", to: "/" },
  { title: "About", to: "/" },
];

const Test: FC<{}> = () => {
  return <div> This is a test component</div>;
};

export default withBreadcrumbs<{}>({ Component: Test, breadcrumbItems: items });

export interface BreadcrumbItemProps {
  title: string;
  hasArrow?: boolean;
  to: string;
}

export default interface BreadcrumbProps {
  items: BreadcrumbItemProps[];
}

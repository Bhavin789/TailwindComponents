export interface BreadcrumbItemData {
  title: string;
  to: string;
}

export interface BreadcrumbItemProps {
  title: string;
  isLastItem?: boolean;
  to: string;
}

export default interface BreadcrumbProps {
  items: BreadcrumbItemData[];
}

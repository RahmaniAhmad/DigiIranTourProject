import { Pagination } from "@nextui-org/react";
interface CustomPaginationProps {
  /**
   * The total number of pages.
   */
  total: number;
  /**
   * The selected page on initial render.
   * @default 1
   */
  initialPage?: number;
  /**
   * The controlled selected page.
   */
  page?: number;
  /**
   * The number of pages to show on each side of the current page.
   * @default 1
   */
  siblings?: number;
  /**
   * The number of pages to show at the beginning and end of the pagination.
   * @default 1
   */
  boundaries?: number;
  /**
   * If `true`, the range will include "prev" and "next" buttons.
   * @default false
   */
  showControls?: boolean;
  /**
   * Callback fired when the page changes.
   */
  onChange?: (page: number) => void;
}
const CustomPagination = (props: CustomPaginationProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        direction: "ltr",
      }}
    >
      <Pagination
        page={props.page}
        total={props.total}
        siblings={props.siblings}
        initialPage={props.initialPage}
        showControls={props.showControls}
        onChange={props.onChange}
      ></Pagination>
    </div>
  );
};
export default CustomPagination;

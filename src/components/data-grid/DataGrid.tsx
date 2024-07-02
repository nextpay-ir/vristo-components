import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  PaginationState,
  Updater,
  // usePagination,
} from "@tanstack/react-table";
import clsx from "clsx";
import { Icon } from "@iconify/react";
import { cva } from "class-variance-authority";

const thStyles = cva(
  "px-3 py-2 text-left text-xs font-bold text-gray-700 uppercase tracking-wider"
);

const tdStyles = cva("px-3 py-2 whitespace-nowrap text-sm text-gray-600");

interface DataGridProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  getRowId: (row: T) => string;
  paginationModel: PaginationState;
  onPaginationModelChange: (newModel: Updater<PaginationState>) => void; // Change the type here
  className?: string;
}
export const DataGrid = <T extends object>({
  data,
  columns,
  getRowId,
  paginationModel,
  onPaginationModelChange,
  className,
}: DataGridProps<T>) => {
  const table = useReactTable<T>({
    data,
    columns,
    getRowId,
    state: {
      pagination: paginationModel,
    },
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: onPaginationModelChange,
  });

  return (
    <div className={clsx("overflow-x-auto", className)}>
      <table className="min-w-full divide-y divide-gray-200 border-gray-200 border-[1.5px]">
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  scope="col"
                  className={clsx(thStyles(), className)}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 border-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr className="hover:bg-gray-50 hover:text-white" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className={clsx(tdStyles(), className)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="flex justify-between items-center py-4">
        <div className="text-xs px-2">
          <span>صفحه {table.getState().pagination.pageIndex + 1}</span> از{" "}
          {table.getPageCount()}
        </div>

        <div className="space-x-4 ">
          <button
            className="p-1 transition duration-300 ease-in-out border-2 border-gray-150 bg-gray-100 rounded text-gray-700 active:bg-primary hover:bg-primary hover:border-primary hover:cursor-pointer  active:text-white hover:text-white"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <Icon
              icon="weui:arrow-outlined"
              className="rotate-180"
              width={15}
              height={15}
            />
          </button>
          <button
            className="p-1 transition duration-300 ease-in-out border-2 border-gray-150 bg-gray-100 rounded text-gray-700 active:bg-primary hover:bg-primary hover:border-primary active:text-white hover:text-white  hover:cursor-pointer"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <Icon icon="weui:arrow-outlined" width={15} height={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { FaEdit, FaTrash } from "react-icons/fa";

export interface IAction {
  showEdit: boolean;
  showDelete: boolean;
  onDelete?: (id: number) => void;
  baseActionURL?: string;
}
interface ITable {
  loading?: boolean;
  heads?: string[];
  data?: object[];
  showId?: boolean;
  actions?: IAction;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const Table = ({
  loading = false,
  heads,
  data,
  showId = false,
  actions = {
    showEdit: true,
    showDelete: true,
    baseActionURL: "",
  },
  onDelete,
  onEdit,
}: ITable) => {
  return (
    <div className="relative w-full h-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
          <tr>
            {heads?.map((head: string) => {
              return (
                <th key={head} scope="col" className="px-6 py-3">
                  {head}
                </th>
              );
            })}
            {actions?.showEdit && <th className="px-6 py-4">ویرایش</th>}
            {actions?.showDelete && <th className="px-6 py-4">حذف</th>}
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td className="text-center py-4" colSpan={4}>
                loading...
              </td>
            </tr>
          )}
          {data &&
            data.map((row: any, dataIndex: number) => {
              return (
                <tr
                  key={dataIndex}
                  className={`bg-white border-b ${
                    dataIndex % 2 == 0
                      ? "dark:bg-gray-800"
                      : "dark:bg-gray-800 opacity-95"
                  }  dark:border-gray-700`}
                >
                  {Object.values(row).map((col: any, rowIndex: number) => {
                    if (!showId && rowIndex === 0) return;
                    return (
                      <td key={rowIndex} className="px-6 py-4">
                        {(col + "").includes(".jpg") ||
                        (col + "").includes(".png") ? (
                          <Image
                            src={`http://localhost:3001/uploads/images/${col}`}
                            alt={col + "" ?? "image"}
                            width={128}
                            height={128}
                            className="h-full w-full object-cover object-center"
                          />
                        ) : (
                          col
                        )}
                      </td>
                    );
                  })}

                  {actions?.showEdit && (
                    <td key={dataIndex} className="px-6 py-4">
                      <Button
                        isIconOnly
                        className="text-green-800 hover:text-green-600"
                        onClick={() => onEdit && onEdit(row.id)}
                      >
                        <FaEdit />
                      </Button>
                    </td>
                  )}
                  {actions?.showDelete && (
                    <td key={dataIndex} className="px-6 py-4">
                      <Button
                        isIconOnly
                        className="text-red-800 hover:text-red-600"
                        onClick={() => onDelete && onDelete(row.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

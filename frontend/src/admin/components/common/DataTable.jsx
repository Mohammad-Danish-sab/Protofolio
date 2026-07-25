export default function DataTable({ columns = [], data = [], renderActions }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-800">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-6 py-4 text-left text-sm font-semibold text-slate-300"
              >
                {column.title}
              </th>
            ))}

            {renderActions && (
              <th className="px-6 py-4 text-center">Actions</th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-t border-slate-800 hover:bg-slate-900/40 transition"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4">
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}

              {renderActions && (
                <td className="px-6 py-4">{renderActions(row)}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

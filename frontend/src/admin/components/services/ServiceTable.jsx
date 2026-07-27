import { useMemo, useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteService } from "../../services/serviceService";

export default function ServiceTable({
  services = [],
  refreshServices,
  onEdit,
}) {
  const [search, setSearch] = useState("");

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = useMemo(() => {
    const query = search.toLowerCase();

    return services.filter(
      (service) =>
        service.title?.toLowerCase().includes(query) ||
        service.description?.toLowerCase().includes(query),
    );
  }, [services, search]);

  const handleDelete = async () => {
    if (!selectedService) return;

    try {
      await deleteService(selectedService.id);

      toast.success("Service deleted successfully");

      await refreshServices();

      setDeleteOpen(false);
      setSelectedService(null);
    } catch (error) {
      toast.error(error?.response?.data?.detail || "Failed to delete service");
    }
  };

  return (
    <>
      <Card>
        {/* Header */}

        <div className="flex justify-between items-center mb-8">
          <div className="relative w-80">
            <Search
              className="absolute left-4 top-3.5 text-slate-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                pl-11
                pr-4
                py-3
                rounded-xl
                bg-slate-900
                border
                border-slate-700
                outline-none
                focus:border-cyan-500
              "
            />
          </div>

          <p className="text-slate-400">
            Total Services :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredServices.length}
            </span>
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4">Title</th>

                <th className="text-left">Description</th>

                <th className="text-center">Icon</th>

                <th className="text-center">Color</th>

                <th className="text-center">Order</th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredServices.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-10 text-slate-400">
                    No Services Found
                  </td>
                </tr>
              ) : (
                filteredServices.map((service) => (
                  <tr
                    key={service.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    {/* Title */}

                    <td className="py-5">
                      <h3 className="font-semibold">{service.title}</h3>
                    </td>

                    {/* Description */}

                    <td className="max-w-sm">
                      <p className="text-slate-400 line-clamp-2">
                        {service.description}
                      </p>
                    </td>

                    {/* Icon */}

                    <td className="text-center">
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-cyan-400 text-sm">
                        {service.icon}
                      </span>
                    </td>

                    {/* Color */}

                    <td className="text-center">
                      <div
                        className="w-8 h-8 rounded-full mx-auto border border-slate-700"
                        style={{
                          backgroundColor: service.color,
                        }}
                      />
                    </td>

                    {/* Order */}

                    <td className="text-center font-semibold text-cyan-400">
                      {service.order}
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => onEdit(service)}
                          className="
                            w-10
                            h-10
                            rounded-xl
                            bg-cyan-500/10
                            hover:bg-cyan-500
                            transition
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            setDeleteOpen(true);
                          }}
                          className="
                            w-10
                            h-10
                            rounded-xl
                            bg-red-500/10
                            hover:bg-red-500
                            transition
                            flex
                            items-center
                            justify-center
                          "
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      <ConfirmDelete
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        title="Delete Service"
        description="This action cannot be undone."
      />
    </>
  );
}

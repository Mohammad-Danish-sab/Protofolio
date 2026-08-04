import { useMemo, useState } from "react";
import { Search, Eye, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import Card from "../common/Card";
import ConfirmDelete from "../common/ConfirmDelete";

import { deleteMessage } from "../../services/contactService";

export default function ContactTable({
  messages = [],
  refreshMessages,
  onView,
}) {
  const [search, setSearch] = useState("");
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const filteredMessages = useMemo(() => {
    const query = search.toLowerCase();

    return messages.filter(
      (message) =>
        message.name?.toLowerCase().includes(query) ||
        message.email?.toLowerCase().includes(query) ||
        message.subject?.toLowerCase().includes(query),
    );
  }, [messages, search]);

  const handleDelete = async () => {
    if (!selectedMessage) return;

    try {
      await deleteMessage(selectedMessage.id);

      toast.success("Message deleted successfully");

      await refreshMessages();

      setDeleteOpen(false);
      setSelectedMessage(null);
    } catch (error) {
      console.error(error);

      toast.error(error?.response?.data?.detail || "Failed to delete message");
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
              placeholder="Search Messages..."
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
            Total Messages :
            <span className="ml-2 font-bold text-cyan-400">
              {filteredMessages.length}
            </span>
          </p>
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-4">Name</th>
                <th className="text-left">Email</th>
                <th className="text-left">Subject</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMessages.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-10 text-slate-400">
                    No Messages Found
                  </td>
                </tr>
              ) : (
                filteredMessages.map((message) => (
                  <tr
                    key={message.id}
                    className="border-b border-slate-800 hover:bg-slate-900 transition"
                  >
                    <td className="py-5 font-medium">{message.name}</td>

                    <td>{message.email}</td>

                    <td>{message.subject}</td>

                    <td className="text-center">
                      {message.read ? (
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                          Read
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
                          Unread
                        </span>
                      )}
                    </td>

                    <td>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={() => onView(message)}
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
                          <Eye size={18} />
                        </button>

                        <button
                          onClick={() => {
                            setSelectedMessage(message);
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
        title="Delete Message"
        description="This action cannot be undone."
      />
    </>
  );
}

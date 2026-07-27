import { Mail } from "lucide-react";
import Card from "../common/Card";

export default function RecentContacts({ contacts = [] }) {
  return (
    <Card>
      <div className="flex items-center gap-3 mb-6">
        <Mail className="text-orange-400" size={22} />
        <h2 className="text-xl font-semibold">Recent Contacts</h2>
      </div>

      {contacts.length === 0 ? (
        <p className="text-slate-400">No recent messages.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="border-b border-slate-800 pb-4 last:border-none"
            >
              <h3 className="font-semibold">{contact.name}</h3>

              <p className="text-sm text-slate-400">{contact.email}</p>

              <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                {contact.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

import { Mail, User, Calendar, MessageSquare } from "lucide-react";

import Modal from "../common/Modal";
import Button from "../common/Button";

export default function ContactDetailsModal({ open, onClose, message }) {
  if (!message) return null;

  return (
    <Modal open={open} onClose={onClose} title="Contact Message" size="4xl">
      <div className="space-y-6">
        {/* User Info */}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <User className="text-cyan-400" size={18} />

              <h3 className="font-semibold">Sender</h3>
            </div>

            <p className="text-lg font-medium">{message.name}</p>
          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="text-cyan-400" size={18} />

              <h3 className="font-semibold">Email</h3>
            </div>

            <p>{message.email}</p>
          </div>
        </div>

        {/* Subject */}

        <div className="bg-slate-900 rounded-xl p-5 border border-slate-700">
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="text-cyan-400" size={18} />

            <h3 className="font-semibold">Subject</h3>
          </div>

          <p className="font-medium">{message.subject}</p>
        </div>

        {/* Message */}

        <div className="bg-slate-900 rounded-xl p-5 border border-slate-700">
          <h3 className="font-semibold mb-4">Message</h3>

          <div className="whitespace-pre-wrap leading-7 text-slate-300">
            {message.message}
          </div>
        </div>

        {/* Date */}

        <div className="flex items-center gap-3 text-slate-400">
          <Calendar size={18} />

          <span>
            {message.created_at
              ? new Date(message.created_at).toLocaleString()
              : "No Date"}
          </span>
        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 pt-4">
          <a href={`mailto:${message.email}?subject=Re: ${message.subject}`}>
            <Button>Reply</Button>
          </a>

          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
}

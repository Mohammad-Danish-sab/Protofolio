import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import ContactTable from "../../components/contact/ContactTable";
import ContactDetailsModal from "../../components/contact/ContactDetailsModal";

import { getMessages } from "../../services/contactService";

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const data = await getMessages();

      setMessages(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <AdminLayout title="Contact Messages">
      <PageHeader
        title="Contact Messages"
        subtitle="Manage messages sent from your portfolio."
      />

      {loading ? (
        <Loader />
      ) : messages.length === 0 ? (
        <EmptyState
          title="No Messages"
          description="No one has contacted you yet."
        />
      ) : (
        <ContactTable
          messages={messages}
          refreshMessages={fetchMessages}
          onView={(message) => {
            setSelectedMessage(message);
            setModalOpen(true);
          }}
        />
      )}

      <ContactDetailsModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setSelectedMessage(null);
        }}
        message={selectedMessage}
      />
    </AdminLayout>
  );
}

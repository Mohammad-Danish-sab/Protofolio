import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Pencil } from "lucide-react";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import AboutModal from "../../components/about/AboutModal";

import { getAbout } from "../../services/aboutService";

export default function About() {
  const [about, setAbout] = useState(null);

  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  const fetchAbout = async () => {
    try {
      setLoading(true);

      const data = await getAbout();

      setAbout(data);
    } catch (err) {
      console.error(err);

      toast.error("Failed to load About");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <AdminLayout title="About">
      <PageHeader
        title="About Section"
        subtitle="Manage your portfolio About page"
      />

      <div className="flex justify-end mb-6">
        <Button onClick={() => setModalOpen(true)}>
          <Pencil size={18} />
          {about ? "Edit About" : "Create About"}
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : !about ? (
        <EmptyState
          title="No About Data"
          description="Create your About section."
        />
      ) : (
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 space-y-6">
          <img
            src={about.hero_image}
            alt={about.hero_title}
            className="w-full h-72 rounded-2xl object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold">{about.hero_title}</h2>

            <p className="text-slate-400 mt-4">{about.hero_description}</p>

            <blockquote className="mt-6 italic text-cyan-400">
              "{about.hero_quote}"
            </blockquote>
          </div>
        </div>
      )}

      <AboutModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        about={about}
        refreshAbout={fetchAbout}
      />
    </AdminLayout>
  );
}

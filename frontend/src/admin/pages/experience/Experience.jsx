import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import ExperienceTable from "../../components/experience/ExperienceTable";
import ExperienceModal from "../../components/experience/ExperienceModal";

import { getExperiences } from "../../services/experienceService";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const fetchExperiences = async () => {
    try {
      setLoading(true);

      const data = await getExperiences();

      setExperiences(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load experiences");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const handleAdd = () => {
    setSelectedExperience(null);
    setModalOpen(true);
  };

  const handleEdit = (experience) => {
    setSelectedExperience(experience);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedExperience(null);
  };

  return (
    <AdminLayout title="Experience">
      <PageHeader title="Experience" subtitle="Manage your work experience" />

      <div className="flex justify-end mb-6">
        <Button onClick={handleAdd}>
          <Plus size={18} />
          <span>Add Experience</span>
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : experiences.length === 0 ? (
        <EmptyState
          title="No Experience Found"
          description="Create your first experience."
        />
      ) : (
        <ExperienceTable
          experiences={experiences}
          refreshExperiences={fetchExperiences}
          onEdit={handleEdit}
        />
      )}

      <ExperienceModal
        open={modalOpen}
        onClose={handleClose}
        experience={selectedExperience}
        refreshExperiences={fetchExperiences}
      />
    </AdminLayout>
  );
}

import { useEffect, useState, useCallback } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import SkillTable from "../../components/skills/SkillTable";
import SkillModal from "../../components/skills/SkillModal";

import { getSkills } from "../../services/skillService";

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const fetchSkills = useCallback(async () => {
    try {
      setLoading(true);

      const data = await getSkills();

      setSkills(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Fetch Skills Error:", error);

      toast.error(error?.response?.data?.detail || "Failed to load skills");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkills();
  }, [fetchSkills]);

  const handleAdd = () => {
    setSelectedSkill(null);
    setModalOpen(true);
  };

  const handleEdit = (skill) => {
    setSelectedSkill(skill);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedSkill(null);
  };

  return (
    <AdminLayout title="Skills">
      <PageHeader title="Skills" subtitle="Manage your portfolio skills" />

      <div className="flex justify-end mb-6">
        <Button onClick={handleAdd}>
          <Plus size={18} />
          <span>Add Skill</span>
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : skills.length === 0 ? (
        <EmptyState
          title="No Skills Found"
          description="Create your first skill."
        />
      ) : (
        <SkillTable
          skills={skills}
          refreshSkills={fetchSkills}
          onEdit={handleEdit}
        />
      )}

      <SkillModal
        open={modalOpen}
        onClose={handleClose}
        skill={selectedSkill}
        refreshSkills={fetchSkills}
      />
    </AdminLayout>
  );
}

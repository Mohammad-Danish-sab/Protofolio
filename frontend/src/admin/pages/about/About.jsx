import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import AboutForm from "../../components/about/AboutForm";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";

import aboutService from "../../services/aboutService";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [about, setAbout] = useState(null);

  const fetchAbout = async () => {
    try {
      setLoading(true);

      const data = await aboutService.getAbout();

      setAbout(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load About information");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);

      const response = await aboutService.saveAbout(formData);

      setAbout(response);

      toast.success("About section updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update About section.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <PageHeader
          title="About"
          subtitle="Manage your portfolio About section."
        />

        {loading ? (
          <Loader />
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <AboutForm
              initialData={about}
              onSubmit={handleSubmit}
              loading={saving}
            />
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

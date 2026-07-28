import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Loader from "../../components/common/Loader";
import Card from "../../components/common/Card";
import HeroForm from "../../components/hero/HeroForm";
import HeroPreview from "../../components/hero/HeroPreview";

import { getHero, updateHero } from "../../services/heroService";

export default function Hero() {
  const [hero, setHero] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchHero();
  }, []);

  async function fetchHero() {
    try {
      const data = await getHero();
      setHero(data);
    } catch {
      toast.error("Failed to load Hero");
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(formData) {
    try {
      setSaving(true);

      await updateHero(formData);

      toast.success("Hero Updated");

      fetchHero();
    } catch {
      toast.error("Update Failed");
    } finally {
      setSaving(false);
    }
  }

  if (loading)
    return (
      <AdminLayout title="Hero">
        <Loader />
      </AdminLayout>
    );

  return (
    <AdminLayout title="Hero">
      <PageHeader
        title="Hero Section"
        subtitle="Manage portfolio hero section"
      />

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <HeroForm
            initialData={hero}
            onSubmit={handleSubmit}
            loading={saving}
          />
        </Card>

        <HeroPreview hero={hero} />
      </div>
    </AdminLayout>
  );
}

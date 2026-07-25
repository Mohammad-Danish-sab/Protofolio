import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import toast from "react-hot-toast";

import AdminLayout from "../../components/layout/AdminLayout";
import PageHeader from "../../components/common/PageHeader";
import Button from "../../components/common/Button";
import Loader from "../../components/common/Loader";
import EmptyState from "../../components/common/EmptyState";

import BlogTable from "../../components/blogs/BlogTable";
import BlogModal from "../../components/blogs/BlogModal";

import { getBlogs } from "../../services/blogService";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalOpen, setModalOpen] = useState(false);

  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);

      const data = await getBlogs();

      setBlogs(data);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    setSelectedBlog(null);
    setModalOpen(true);
  };

  const handleEdit = (blog) => {
    setSelectedBlog(blog);
    setModalOpen(true);
  };

  return (
    <AdminLayout title="Blogs">
      <PageHeader title="Blogs" subtitle="Manage all blog posts" />

      <div className="flex justify-end mb-6">
        <Button onClick={handleAdd}>
          <Plus size={18} />

          <span>Add Blog</span>
        </Button>
      </div>

      {loading ? (
        <Loader />
      ) : blogs.length === 0 ? (
        <EmptyState
          title="No Blogs Found"
          description="Create your first blog."
        />
      ) : (
        <BlogTable
          blogs={blogs}
          refreshBlogs={fetchBlogs}
          onEdit={handleEdit}
        />
      )}

      <BlogModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        blog={selectedBlog}
        refreshBlogs={fetchBlogs}
      />
    </AdminLayout>
  );
}

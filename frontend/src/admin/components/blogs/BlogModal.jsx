import { useState } from "react";
import toast from "react-hot-toast";

import Modal from "../common/Modal";
import BlogForm from "./BlogForm";

import { createBlog, updateBlog } from "../../services/blogService";

export default function BlogModal({
  open,
  onClose,
  blog = null,
  refreshBlogs,
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);

      if (blog) {
        await updateBlog(blog.id, data);

        toast.success("Blog updated successfully");
      } else {
        await createBlog(data);

        toast.success("Blog created successfully");
      }

      refreshBlogs();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={blog ? "Edit Blog" : "Create Blog"}
      size="4xl"
    >
      <BlogForm initialData={blog} onSubmit={handleSubmit} loading={loading} />
    </Modal>
  );
}

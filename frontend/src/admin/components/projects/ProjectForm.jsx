import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import Button from "../common/Button";
import ImageUploader from "./ImageUploader";

export default function ProjectForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      tech_stack: "",
      github_link: "",
      live_link: "",
      featured: false,
    },
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title || "",
        description: initialData.description || "",
        tech_stack: initialData.tech_stack || "",
        github_link: initialData.github_link || "",
        live_link: initialData.live_link || "",
        featured: initialData.featured || false,
      });

      setPreview(initialData.image || "");
    }
  }, [initialData, reset]);

  const submitForm = (data) => {
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tech_stack", data.tech_stack);
    formData.append("github_link", data.github_link);
    formData.append("live_link", data.live_link);
    formData.append("featured", data.featured);

    if (image) {
      formData.append("image", image);
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
      <ImageUploader
        image={image}
        setImage={setImage}
        preview={preview}
        setPreview={setPreview}
      />

      <Input
        label="Project Title"
        placeholder="Portfolio Website"
        {...register("title", {
          required: "Title is required",
        })}
        error={errors.title?.message}
      />

      <div>
        <label className="block mb-2 text-sm font-medium">Description</label>

        <textarea
          rows={5}
          placeholder="Project description..."
          {...register("description", {
            required: "Description is required",
          })}
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-4
            py-3
            outline-none
            focus:border-cyan-500
          "
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <Input
        label="Tech Stack"
        placeholder="React, FastAPI, PostgreSQL"
        {...register("tech_stack", {
          required: "Tech stack is required",
        })}
        error={errors.tech_stack?.message}
      />

      <Input
        label="GitHub Link"
        placeholder="https://github.com/username/project"
        {...register("github_link")}
      />

      <Input
        label="Live Demo Link"
        placeholder="https://project.com"
        {...register("live_link")}
      />

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("featured")}
          className="w-5 h-5 accent-cyan-500"
        />
        Featured Project
      </label>

      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : initialData
              ? "Update Project"
              : "Create Project"}
        </Button>
      </div>
    </form>
  );
}

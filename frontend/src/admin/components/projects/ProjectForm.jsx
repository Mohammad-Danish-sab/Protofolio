import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ImageUploader from "../common/ImageUploader";

import Input from "../common/Input";
import Button from "../common/Button";

export default function ProjectForm({
  initialData = null,
  onSubmit,
  loading = false,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      image: "",
      github_link: "",
      live_link: "",
      tech_stack: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const submitHandler = async (data) => {
    try {
      await onSubmit(data);

      toast.success(
        initialData
          ? "Project Updated Successfully"
          : "Project Added Successfully",
      );

      if (!initialData) {
        reset();
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
      {/* Title */}

      <div>
        <Input
          label="Project Title"
          placeholder="Portfolio Website"
          {...register("title", {
            required: "Title is required",
          })}
        />

        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Description */}

      <div>
        <label className="text-sm text-gray-300">Description</label>

        <textarea
          rows={5}
          className="
          mt-2
          w-full
          rounded-xl
          bg-slate-900
          border
          border-slate-700
          p-4
          text-white
          focus:border-cyan-500
          outline-none
          "
          {...register("description", {
            required: "Description is required",
          })}
        />

        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Image */}

      <Input
        label="Image URL"
        placeholder="https://..."
        {...register("image")}
      />

      {/* GitHub */}

      <Input
        label="GitHub URL"
        placeholder="https://github.com/..."
        {...register("github_link")}
      />

      {/* Live */}

      <Input
        label="Live URL"
        placeholder="https://..."
        {...register("live_link")}
      />

      {/* Tech Stack */}

      <Input
        label="Tech Stack"
        placeholder="React, FastAPI, PostgreSQL"
        {...register("tech_stack")}
      />

      {/* Buttons */}

      <div className="flex justify-end gap-4">
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

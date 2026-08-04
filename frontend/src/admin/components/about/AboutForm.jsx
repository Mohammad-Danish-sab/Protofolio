import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

export default function AboutForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      image: "",
      resume_link: "",
      experience: 0,
      projects: 0,
      clients: 0,
      coffee: 0,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        title: initialData.title || "",
        subtitle: initialData.subtitle || "",
        description: initialData.description || "",
        image: initialData.image || "",
        resume_link: initialData.resume_link || "",
        experience: initialData.experience || 0,
        projects: initialData.projects || 0,
        clients: initialData.clients || 0,
        coffee: initialData.coffee || 0,
      });
    }
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Title"
        placeholder="About Me"
        error={errors.title?.message}
        {...register("title", {
          required: "Title is required",
        })}
      />

      <Input
        label="Subtitle"
        placeholder="Full Stack Developer"
        {...register("subtitle")}
      />

      <TextArea
        label="Description"
        rows={6}
        placeholder="Write about yourself..."
        error={errors.description?.message}
        {...register("description", {
          required: "Description is required",
        })}
      />

      <Input
        label="Image URL"
        placeholder="https://..."
        {...register("image")}
      />

      <Input
        label="Resume URL"
        placeholder="https://..."
        {...register("resume_link")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          type="number"
          label="Experience (Years)"
          {...register("experience", {
            valueAsNumber: true,
          })}
        />

        <Input
          type="number"
          label="Projects"
          {...register("projects", {
            valueAsNumber: true,
          })}
        />

        <Input
          type="number"
          label="Happy Clients"
          {...register("clients", {
            valueAsNumber: true,
          })}
        />

        <Input
          type="number"
          label="Coffee Cups"
          {...register("coffee", {
            valueAsNumber: true,
          })}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : initialData
              ? "Update About"
              : "Create About"}
        </Button>
      </div>
    </form>
  );
}

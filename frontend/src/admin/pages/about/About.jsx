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
      experience: "",
      projects: "",
      clients: "",
      coffee: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Title"
        placeholder="About Me"
        {...register("title", {
          required: "Title is required",
        })}
        error={errors.title?.message}
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
        {...register("description", {
          required: "Description is required",
        })}
        error={errors.description?.message}
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

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          type="number"
          label="Experience (Years)"
          {...register("experience")}
        />

        <Input type="number" label="Projects" {...register("projects")} />

        <Input type="number" label="Happy Clients" {...register("clients")} />

        <Input type="number" label="Coffee Cups" {...register("coffee")} />
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

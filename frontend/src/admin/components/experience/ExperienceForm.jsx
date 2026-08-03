import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

const employmentTypes = [
  "Full Time",
  "Part Time",
  "Internship",
  "Freelance",
  "Contract",
];

export default function ExperienceForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "",
      position: "",
      location: "",
      employment_type: "Full Time",
      start_date: "",
      end_date: "",
      current: false,
      company_logo: "",
      technologies: "",
      description: "",
      display_order: 1,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        ...initialData,
        technologies: Array.isArray(initialData.technologies)
          ? initialData.technologies.join(", ")
          : initialData.technologies || "",
      });
    }
  }, [initialData, reset]);

  const current = watch("current");

  const submitHandler = (data) => {
    data.technologies = data.technologies
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Company Name"
          placeholder="Google"
          {...register("company", {
            required: "Company is required",
          })}
          error={errors.company?.message}
        />

        <Input
          label="Job Title"
          placeholder="Frontend Developer"
          {...register("position", {
            required: "Position is required",
          })}
          error={errors.position?.message}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Location"
          placeholder="Remote"
          {...register("location")}
        />

        <div>
          <label className="block mb-2 text-sm font-medium">
            Employment Type
          </label>

          <select
            {...register("employment_type")}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none focus:border-cyan-500"
          >
            {employmentTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Input type="date" label="Start Date" {...register("start_date")} />

        <Input
          type="date"
          label="End Date"
          disabled={current}
          {...register("end_date")}
        />
      </div>

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("current")}
          className="accent-cyan-500"
        />

        <span>Currently Working Here</span>
      </label>

      <Input
        label="Company Logo URL"
        placeholder="https://..."
        {...register("company_logo")}
      />

      <Input
        label="Technologies"
        placeholder="React, Node.js, FastAPI, PostgreSQL"
        {...register("technologies")}
      />

      <TextArea
        rows={6}
        label="Job Description"
        placeholder="Describe your responsibilities..."
        {...register("description")}
      />

      <Input
        type="number"
        label="Display Order"
        {...register("display_order")}
      />

      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : initialData
              ? "Update Experience"
              : "Create Experience"}
        </Button>
      </div>
    </form>
  );
}

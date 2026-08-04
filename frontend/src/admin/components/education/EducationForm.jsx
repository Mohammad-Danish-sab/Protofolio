import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

export default function EducationForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      institution: "",
      degree: "",
      field_of_study: "",
      location: "",
      start_year: "",
      end_year: "",
      current: false,
      grade: "",
      institution_logo: "",
      description: "",
      display_order: 1,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const current = watch("current");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Institution */}

      <Input
        label="Institution"
        placeholder="ABC University"
        {...register("institution", {
          required: "Institution is required",
        })}
        error={errors.institution?.message}
      />

      {/* Degree & Field */}

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Degree"
          placeholder="Bachelor of Technology"
          {...register("degree", {
            required: "Degree is required",
          })}
          error={errors.degree?.message}
        />

        <Input
          label="Field of Study"
          placeholder="Computer Science"
          {...register("field_of_study", {
            required: "Field is required",
          })}
          error={errors.field_of_study?.message}
        />
      </div>

      {/* Location */}

      <Input
        label="Location"
        placeholder="New Delhi"
        {...register("location")}
      />

      {/* Start & End Year */}

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          type="number"
          label="Start Year"
          placeholder="2021"
          {...register("start_year")}
        />

        <Input
          type="number"
          label="End Year"
          placeholder="2025"
          disabled={current}
          {...register("end_year")}
        />
      </div>

      {/* Current */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("current")}
          className="accent-cyan-500"
        />

        <span>Currently Studying</span>
      </label>

      {/* Grade */}

      <Input
        label="CGPA / Percentage"
        placeholder="8.75 CGPA"
        {...register("grade")}
      />

      {/* Logo */}

      <Input
        label="Institution Logo URL"
        placeholder="https://..."
        {...register("institution_logo")}
      />

      {/* Description */}

      <TextArea
        label="Description"
        rows={5}
        placeholder="Achievements, coursework, activities..."
        {...register("description")}
      />

      {/* Display Order */}

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
              ? "Update Education"
              : "Create Education"}
        </Button>
      </div>
    </form>
  );
}

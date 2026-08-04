import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import TextArea from "../common/TextArea";
import Button from "../common/Button";

export default function TestimonialForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      designation: "",
      company: "",
      image: "",
      rating: 5,
      message: "",
      display_order: 1,
      active: true,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const rating = watch("rating");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}

      <Input
        label="Client Name"
        placeholder="John Doe"
        {...register("name", {
          required: "Client name is required",
        })}
        error={errors.name?.message}
      />

      {/* Designation & Company */}

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Designation"
          placeholder="Software Engineer"
          {...register("designation")}
        />

        <Input label="Company" placeholder="Google" {...register("company")} />
      </div>

      {/* Image */}

      <Input
        label="Profile Image URL"
        placeholder="https://..."
        {...register("image")}
      />

      {/* Rating */}

      <div>
        <label className="block mb-2 text-sm font-medium">
          Rating ({rating} ⭐)
        </label>

        <input
          type="range"
          min="1"
          max="5"
          step="1"
          {...register("rating")}
          className="w-full accent-cyan-500"
        />
      </div>

      {/* Testimonial */}

      <TextArea
        label="Testimonial"
        rows={5}
        placeholder="Write testimonial..."
        {...register("message", {
          required: "Testimonial is required",
        })}
        error={errors.message?.message}
      />

      {/* Display Order */}

      <Input
        type="number"
        label="Display Order"
        {...register("display_order")}
      />

      {/* Active */}

      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          {...register("active")}
          className="accent-cyan-500"
        />

        <span>Active Testimonial</span>
      </label>

      <div className="flex justify-end">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : initialData
              ? "Update Testimonial"
              : "Create Testimonial"}
        </Button>
      </div>
    </form>
  );
}

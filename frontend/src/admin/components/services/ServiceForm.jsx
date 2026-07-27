import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import Button from "../common/Button";

export default function ServiceForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      icon: "",
      color: "#06b6d4",
      order: 1,
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const color = watch("color");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Service Title */}

      <Input
        label="Service Title"
        placeholder="Web Development"
        {...register("title", {
          required: "Title is required",
        })}
        error={errors.title?.message}
      />

      {/* Description */}

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-300">
          Description
        </label>

        <textarea
          rows={4}
          placeholder="Write a short description..."
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
            resize-none
            focus:border-cyan-500
          "
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Icon */}

      <Input
        label="Lucide Icon Name"
        placeholder="Code2"
        {...register("icon", {
          required: "Icon is required",
        })}
        error={errors.icon?.message}
      />

      {/* Display Order */}

      <Input
        type="number"
        label="Display Order"
        placeholder="1"
        {...register("order", {
          required: "Display order is required",
          valueAsNumber: true,
          min: {
            value: 1,
            message: "Minimum value is 1",
          },
        })}
        error={errors.order?.message}
      />

      {/* Color */}

      <div>
        <label className="block mb-2 text-sm font-medium text-slate-300">
          Service Color
        </label>

        <div className="flex items-center gap-4">
          <input
            type="color"
            {...register("color")}
            className="h-12 w-16 rounded cursor-pointer border border-slate-700 bg-transparent"
          />

          <div
            className="flex-1 h-10 rounded-xl border border-slate-700"
            style={{
              backgroundColor: color,
            }}
          />
        </div>
      </div>

      {/* Submit */}

      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : initialData
              ? "Update Service"
              : "Create Service"}
        </Button>
      </div>
    </form>
  );
}

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import Button from "../common/Button";

const categories = [
  "Frontend",
  "Backend",
  "Database",
  "Programming",
  "Tools",
  "Cloud",
  "DevOps",
  "UI/UX",
  "Other",
];

export default function SkillForm({ initialData, onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      icon: "",
      category: "",
      level: 80,
      color: "#06b6d4",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const level = watch("level");
  const color = watch("color");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Skill Name */}

      <Input
        label="Skill Name"
        placeholder="React"
        {...register("name", {
          required: "Skill name is required",
        })}
        error={errors.name?.message}
      />

      {/* Icon */}

      <Input
        label="React Icon Name"
        placeholder="FaReact"
        {...register("icon", {
          required: "Icon is required",
        })}
        error={errors.icon?.message}
      />

      {/* Category */}

      <div>
        <label className="block mb-2 text-sm font-medium">Category</label>

        <select
          {...register("category", {
            required: "Category is required",
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
        >
          <option value="">Select Category</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="mt-1 text-sm text-red-500">{errors.category.message}</p>
        )}
      </div>

      {/* Skill Level */}

      <div>
        <div className="flex justify-between mb-2">
          <label className="text-sm font-medium">Skill Level</label>

          <span className="text-cyan-400 font-semibold">{level}%</span>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          {...register("level")}
          className="w-full accent-cyan-500"
        />
      </div>

      {/* Color */}

      <div>
        <label className="block mb-2 text-sm font-medium">Skill Color</label>

        <div className="flex items-center gap-4">
          <input
            type="color"
            {...register("color")}
            className="h-12 w-16 rounded cursor-pointer border border-slate-700 bg-transparent"
          />

          <div
            className="h-10 flex-1 rounded-xl"
            style={{
              backgroundColor: color,
            }}
          />
        </div>
      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 pt-4">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : initialData
              ? "Update Skill"
              : "Create Skill"}
        </Button>
      </div>
    </form>
  );
}

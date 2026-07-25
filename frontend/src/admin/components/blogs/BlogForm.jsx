import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactQuill from "react-quill";
import slugify from "slugify";

import Input from "../common/Input";
import Button from "../common/Button";
import ImageUploader from "../common/ImageUploader";

export default function BlogForm({
  initialData = null,
  onSubmit,
  loading = false,
}) {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      slug: "",
      category: "",
      excerpt: "",
      content: "",
      image: "",
      featured: false,
      published: true,
      seo_title: "",
      seo_description: "",
    },
  });

  const title = watch("title");

  useEffect(() => {
    if (title) {
      setValue(
        "slug",
        slugify(title, {
          lower: true,
          strict: true,
        }),
      );
    }
  }, [title]);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Cover Image */}

      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <ImageUploader value={field.value} onChange={field.onChange} />
        )}
      />

      {/* Title */}

      <Input
        label="Title"
        {...register("title", {
          required: "Title is required",
        })}
      />

      {errors.title && (
        <p className="text-red-500 text-sm">{errors.title.message}</p>
      )}

      {/* Slug */}

      <Input label="Slug" {...register("slug")} />

      {/* Category */}

      <Input label="Category" placeholder="React" {...register("category")} />

      {/* Excerpt */}

      <div>
        <label className="text-sm mb-2 block">Excerpt</label>

        <textarea
          rows={3}
          className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4"
          {...register("excerpt")}
        />
      </div>

      {/* Content */}

      <div>
        <label className="mb-3 block">Blog Content</label>

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {/* Featured */}

      <div className="flex items-center gap-3">
        <input type="checkbox" {...register("featured")} />

        <label>Featured Blog</label>
      </div>

      {/* Published */}

      <div className="flex items-center gap-3">
        <input type="checkbox" {...register("published")} />

        <label>Publish Immediately</label>
      </div>

      {/* SEO */}

      <Input label="SEO Title" {...register("seo_title")} />

      <div>
        <label className="block mb-2">SEO Description</label>

        <textarea
          rows={3}
          className="w-full rounded-xl bg-slate-900 border border-slate-700 p-4"
          {...register("seo_description")}
        />
      </div>

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : initialData ? "Update Blog" : "Create Blog"}
      </Button>
    </form>
  );
}

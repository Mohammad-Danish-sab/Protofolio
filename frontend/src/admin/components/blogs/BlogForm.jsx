import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
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
  }, [title, setValue]);

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

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
      <div>
        <Input
          label="Title"
          placeholder="Enter blog title"
          {...register("title", {
            required: "Title is required",
          })}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      {/* Slug */}
      <Input label="Slug" placeholder="blog-slug" {...register("slug")} />

      {/* Category */}
      <Input label="Category" placeholder="React" {...register("category")} />

      {/* Excerpt */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Excerpt
        </label>

        <textarea
          rows={4}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
          placeholder="Short description of your blog..."
          {...register("excerpt")}
        />
      </div>

      {/* Blog Content */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Blog Content
        </label>

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <textarea
              rows={15}
              placeholder="Write your blog here..."
              className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none resize-none"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>

      {/* Featured */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="featured"
          className="h-4 w-4 accent-cyan-500"
          {...register("featured")}
        />
        <label htmlFor="featured" className="text-slate-300">
          Featured Blog
        </label>
      </div>

      {/* Published */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="published"
          className="h-4 w-4 accent-cyan-500"
          {...register("published")}
        />
        <label htmlFor="published" className="text-slate-300">
          Publish Immediately
        </label>
      </div>

      {/* SEO Title */}
      <Input
        label="SEO Title"
        placeholder="SEO title"
        {...register("seo_title")}
      />

      {/* SEO Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          SEO Description
        </label>

        <textarea
          rows={4}
          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none"
          placeholder="SEO description..."
          {...register("seo_description")}
        />
      </div>

      {/* Submit */}
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Saving..." : initialData ? "Update Blog" : "Create Blog"}
      </Button>
    </form>
  );
}

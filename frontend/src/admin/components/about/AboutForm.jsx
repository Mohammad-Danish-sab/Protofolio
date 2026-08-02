import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Input from "../common/Input";
import Button from "../common/Button";

export default function AboutForm({ initialData, onSubmit, loading }) {
  const {
    register,

    handleSubmit,

    reset,
  } = useForm({
    defaultValues: {
      hero_title: "",

      hero_description: "",

      hero_quote: "",

      hero_image: "",

      hero_video: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input label="Hero Title" {...register("hero_title")} />

      <Input label="Hero Description" {...register("hero_description")} />

      <Input label="Hero Quote" {...register("hero_quote")} />

      <Input label="Hero Image URL" {...register("hero_image")} />

      <Input label="Video URL" {...register("hero_video")} />

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save About"}
      </Button>
    </form>
  );
}

import { useRef } from "react";
import { Upload, X } from "lucide-react";

export default function ImageUploader({
  image,
  setImage,
  preview,
  setPreview,
}) {
  const inputRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);

    setPreview(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">Project Image</label>

      {preview ? (
        <div className="relative rounded-2xl overflow-hidden border border-slate-700">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-72 object-cover"
          />

          <button
            type="button"
            onClick={removeImage}
            className="
              absolute
              top-3
              right-3
              w-10
              h-10
              rounded-full
              bg-red-500
              hover:bg-red-600
              flex
              items-center
              justify-center
            "
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <label
          className="
            border-2
            border-dashed
            border-slate-700
            rounded-2xl
            h-72
            flex
            flex-col
            items-center
            justify-center
            cursor-pointer
            hover:border-cyan-500
            hover:bg-slate-900
            transition
          "
        >
          <Upload className="text-cyan-400 mb-4" size={48} />

          <p className="text-lg font-semibold">Click to upload image</p>

          <p className="text-slate-400 text-sm mt-2">PNG, JPG or WEBP</p>

          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImage}
          />
        </label>
      )}
    </div>
  );
}

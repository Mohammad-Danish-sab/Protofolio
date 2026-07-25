import { useRef, useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

import { uploadImage } from "../../services/uploadService";

export default function ImageUploader({ value, onChange }) {
  const inputRef = useRef(null);

  const [uploading, setUploading] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      setUploading(true);

      const response = await uploadImage(file);

      onChange(response.image_url);

      toast.success("Image Uploaded Successfully");
    } catch (error) {
      console.error(error);

      toast.error("Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {value ? (
        <div className="relative">
          <img
            src={value}
            alt="Preview"
            className="w-full h-64 rounded-2xl object-cover border border-slate-700"
          />

          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
          >
            <Trash2 size={18} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current.click()}
          className="
            w-full
            h-64
            border-2
            border-dashed
            border-slate-700
            rounded-2xl
            flex
            flex-col
            items-center
            justify-center
            hover:border-cyan-500
            transition
          "
        >
          <ImagePlus size={50} className="text-cyan-400" />

          <p className="mt-4 text-slate-400">
            {uploading ? "Uploading..." : "Click to Upload Image"}
          </p>
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleUpload}
      />
    </div>
  );
}

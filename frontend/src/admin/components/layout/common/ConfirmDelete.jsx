import Modal from "./Modal";
import Button from "./Button";

export default function ConfirmDelete({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <Modal onClose={onClose}>
      <h2 className="text-2xl font-bold text-white">Delete Item?</h2>

      <p className="text-zinc-400 mt-3">This action cannot be undone.</p>

      <div className="flex justify-end gap-4 mt-8">
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>

        <Button variant="danger" onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
}


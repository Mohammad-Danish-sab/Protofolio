import Button from "./Button";

export default function PageHeader({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold text-white">{title}</h1>

        <p className="text-zinc-400 mt-1">{subtitle}</p>
      </div>

      {buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
    </div>
  );
}

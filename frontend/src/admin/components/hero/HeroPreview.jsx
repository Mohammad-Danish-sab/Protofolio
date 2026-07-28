import Card from "../common/Card";

export default function HeroPreview({ hero }) {
  return (
    <Card>
      <div className="space-y-6">
        <img
          src={hero?.image}
          alt={hero?.title}
          className="rounded-xl w-full h-72 object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold">{hero?.title}</h1>

          <h2 className="text-cyan-400 mt-2">{hero?.subtitle}</h2>

          <p className="text-slate-400 mt-4">{hero?.description}</p>

          <button className="mt-6 px-6 py-3 rounded-xl bg-cyan-500">
            {hero?.button_text}
          </button>
        </div>
      </div>
    </Card>
  );
}

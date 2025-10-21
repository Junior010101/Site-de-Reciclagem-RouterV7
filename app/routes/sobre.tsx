import type { Route } from "./+types/sobre";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sobre | Reciclagem Consciente" },
    {
      name: "description",
      content:
        "Informações e fontes sobre reciclagem e consumo responsável no meio ambiente.",
    },
  ];
}

export default function Sobre() {
  return (
    <main className="min-h-screen py-10 px-6 flex items-center">
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Sobre o Projeto</h1>
        </header>

        <p className="text-gray-700 leading-relaxed mb-6">
          Este site tem como objetivo informar e conscientizar sobre a
          importância da reciclagem e o impacto do consumo responsável no meio
          ambiente.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
          Fontes de Informação
        </h2>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {[
            {
              name: "Ministério do Meio Ambiente",
              url: "https://www.gov.br/mma",
            },
            { name: "IBGE", url: "https://www.ibge.gov.br" },
            { name: "eCycle", url: "https://www.ecycle.com.br" },
          ].map((fonte) => (
            <li key={fonte.url}>
              <a
                href={fonte.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline hover:text-blue-700 transition-colors"
              >
                {fonte.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

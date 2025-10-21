import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer
      className="
        relative
        z-20
        bg-neutral-900 
        text-gray-200 
        text-sm
        mt-auto
      "
    >
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-6 
          py-12 
          flex 
          flex-col 
          md:flex-row 
          md:items-center 
          md:justify-between 
          gap-8 
          border-y 
          border-neutral-800
        "
      >
        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            sm:items-center 
            gap-6
          "
        >
          <Link className="z-20" to={"/"}>
            <img
              src="favicon.ico"
              alt="Logomarca"
              className="
              w-16 h-16
              transition-all 
              duration-300 
              hover:drop-shadow-[0_0_10px_#facc15]
              hover:scale-110
            "
            />
          </Link>
          <div>
            <h2 className="text-xl font-semibold">Projeto Sustentável</h2>
            <p className="text-gray-400 mt-1">Transforme o fim em começo.</p>
            <p className="text-gray-500 mt-2">contato@exemplo.org</p>
          </div>
        </div>

        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            gap-3 
            sm:gap-8 
            text-lg 
            font-light 
            text-gray-100
          "
        >
          <Link className="hover:text-amber-300" to={"sobre"}>
            Sobre
          </Link>
          <Link className="hover:text-amber-300" to={"contato"}>
            Contato
          </Link>
        </div>
      </div>

      <div
        className="
          max-w-7xl 
          mx-auto 
          px-6 
          py-6 
          flex 
          flex-col 
          md:flex-row 
          md:items-center 
          md:justify-between 
          text-gray-400 
          text-sm 
          gap-4
        "
      >
        <p>© 2025 Projeto Sustentável</p>
        <div className="flex gap-3">
          <Link to={"/"} className="hover:text-gray-200 transition-colors">
            Privacidade
          </Link>
          <span>|</span>
          <Link to={"/"} className="hover:text-gray-200 transition-colors">
            Termos
          </Link>
        </div>
      </div>
    </footer>
  );
};

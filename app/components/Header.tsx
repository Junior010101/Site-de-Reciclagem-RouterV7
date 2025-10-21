import { Link } from "react-router";

export const Header = () => {
  return (
    <header className="fixed w-screen z-20 backdrop-blur-[0.8px]">
      <nav
        className="
         flex 
         items-center 
         justify-center 
         select-none
         gap-6 
         p-3 
         font-[Montserrat] 
         font-semibold"
      >
        <Link className="z-20 hover:text-amber-300" to={"contato"}>
          Contato
        </Link>
        <Link className="z-20" to={"/"}>
          <img
            src="favicon.ico"
            alt="Logomarca"
            className="
              w-10 h-10
              transition-all 
              duration-300 
              hover:drop-shadow-[0_0_10px_#facc15]
              hover:scale-110
            "
          />
        </Link>
        <Link className="z-20 hover:text-amber-300" to={"sobre"}>
          Sobre
        </Link>
      </nav>
    </header>
  );
};

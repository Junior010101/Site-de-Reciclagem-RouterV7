export const InfoSection = (props: any) => {
  const flipped = props.flip ? "-scale-x-[1]" : "";

  const cores: any = {
    vermelho: "bg-[#C8142E]",
    cinza: "bg-[#BDBDBD]",
    amarelo: "bg-[#ffeb3b]",
    marrom: "bg-[#795548]",
    azul: "bg-[#0072CE]",
    verde: "bg-[#3A9A5B]",
    roxo: "bg-[#6A0DAD]",
  };

  return (
    <article
      className={`
        grid 
        gap-x-5
        items-center 
        ${cores[props.cor]}
        text-white
        not-first:mt-16
        ${flipped}
      `}
    >
      <img
        className="w-sm col-start-1 row-start-1"
        src="/assets/svg/Vector.svg"
        alt="Ícone representando o plástico"
      />
      <img
        className={`
          col-start-1
          row-start-1
          justify-self-center
          -ml-5
          w-14
          sm:w-36
          ${flipped}
        `}
        src={props.icone}
        alt={props.descricao}
      />
      <div className="col-start-2 row-start-1 mr-5">
        <p className={`font-sans text-[9px] sm:text-[16px] ${flipped}`}>
          {props.texto}
        </p>
      </div>
    </article>
  );
};

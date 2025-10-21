import type { Route } from "./+types/home";
import { useEffect, useState } from "react";
import { InfoSection } from "~/components/InfoSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Inicio | Reciclagem Consciente" },
    { name: "Paginá inicial do site", content: "Informativo sobre reciclagem" },
  ];
}

export default function Home() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset((prev) => prev + (scrollY * 0.2 - prev) * 0.1);
    };
    const loop = () => {
      handleScroll();
      animationFrame = requestAnimationFrame(loop);
    };
    animationFrame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <main
      className="
        relative 
        min-h-screen 
        overflow-x-hidden
        bg-[#3A9A5B]
    "
    >
      <div
        className="
          w-full 
          flex 
          justify-center
        "
      >
        <div
          className="
            w-full 
            max-w-[1400px] 
            sm:px-8 
            md:px-12
          "
        >
          <div
            className="
              relative 
              w-full 
              flex 
              justify-end
            "
          >
            <div
              className="
                absolute 
                right-0 
                top-5 
                z-0 
                select-none
              "
              style={{
                transform: `translateY(-${offset}px)`,
                transition: "transform 0.1s ease-out",
                willChange: "transform",
              }}
            >
              <img
                width={550}
                height={550}
                src="/assets/img/Lixo.png"
                alt=""
                className="object-contain md:-ml-20"
              />
            </div>
          </div>

          <section
            className="
              relative 
              flex 
              flex-col 
              items-start 
              justify-center 
              min-h-screen 
              px-8 
              lg:px-20
            "
          >
            <div
              className="
                bg-[#795548] 
                text-white
                p-12  
                max-w-lg 
                h-[580px] 
                z-[11] 
                mt-20
              "
            >
              <h1
                className='
                  font-["Fredericka_the_Great"] 
                  text-3xl
                  sm:text-4xl 
                  leading-snug 
                  mb-9
                '
              >
                Pequenas atitudes hoje, um mundo mais limpo amanhã.
              </h1>
              <p
                className="
                  text-sm 
                  leading-relaxed 
                  mb-14
                "
              >
                O ponto de encontro entre atitude sustentável e estilo de vida
                ativo. Dicas de reciclagem, consumo consciente e pequenas
                mudanças diárias que, juntas, fazem um futuro mais forte.
              </p>
              <a
                href="#to"
                className="
                  border
                  border-white 
                  px-6 
                  py-4 
                  text-lg 
                  font-semibold
                  hover:bg-white 
                  hover:text-[#795548] 
                  transition
                  select-none
                "
              >
                SAIBA MAIS
              </a>
            </div>
          </section>
        </div>
      </div>

      <section
        id="to"
        className="
          relative 
          z-10 
          -mt-10 
          bg-[#bdbdbd4b] 
          backdrop-blur-md 
          py-16 
          lg:py-20
          text-center
          text-black
        "
      >
        <h2
          className="
            text-2xl 
            font-semibold 
            mb-4
          "
        >
          O que oferecemos?
        </h2>
        <p
          className="
            max-w-2xl 
            mx-auto 
            text-sm 
            leading-relaxed
          "
        >
          Em um espaço onde o fim se transforma em começo, reunimos ideias,
          intenções e consciência. Aqui, reciclar é mais do que um ato, é um
          gesto de renascimento contínuo.
        </p>
      </section>

      <section
        className="
          bg-[#BDBDBD] 
          relative 
          z-10 
          py-10
        "
      >
        <div
          className="
            w-full 
            max-w-[1400px] 
            mx-auto 
            flex 
            flex-col 
            md:flex-row 
            items-center 
            justify-between 
            gap-8 
            px-4 
            sm:px-8 
            md:px-12
          "
        >
          <div
            className="
              flex 
              flex-row-reverse
              md:flex-col
              items-center 
              md:items-end
            "
          >
            <img
              className="
                w-56 
                -mt-30
                md:w-2xl
                md:-mt-40
                select-none
              "
              src="assets/svg/Caminhão.svg"
              alt="Caminhão de Lixo"
            />
            <img
              className="
                w-44
                rotate-[120deg]
                md:rotate-0
                md:-mt-20
                md:mr-5
                md:w-64
                select-none
              "
              src="assets/svg/Seta.svg"
              alt="Seta apontada para o video"
            />
          </div>

          <div
            className="
              flex 
              justify-center 
              w-full 
              md:w-[60%] 
              aspect-video
            "
          >
            <iframe
              className="
                w-full 
                h-full 
                rounded-lg 
                shadow-lg
              "
              src="https://www.youtube.com/embed/7pKVLvNViIs?si=BdepU7WJ6LDsYJZx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <section
        className="
          bg-[#795548] 
          relative 
          z-10 
          py-16
          text-black
        "
      >
        <div
          className="
            max-w-[1400px] 
            mx-auto 
            grid 
            gap-10 
            px-4 
            sm:px-8 
            md:px-12
          "
        >
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              gap-8 
              items-center
            "
          >
            <div
              className="
                bg-[#d9d9d910] 
                border 
                border-[#0000001f] 
                overflow-hidden
              "
            >
              <img
                className="w-full"
                src="assets/img/LatasDeLixo.png"
                alt="Latas de lixo reciclável"
              />
              <div className="p-5">
                <h2
                  className="
                    font-bold 
                    mb-3
                  "
                >
                  Como Posso Ajudar?
                </h2>
                <p>
                  Descubra maneiras práticas de separar seu lixo em casa ou na
                  comunidade. Pequenas ações diárias podem fazer uma grande
                  diferença para o meio ambiente.
                </p>
              </div>
            </div>

            <div
              className="
                bg-[#d9d9d910] 
                border 
                border-[#0000001f] 
                overflow-hidden
              "
            >
              <img
                className="w-full"
                src="assets/img/ProcessoReciclagem.png"
                alt="Processo de reciclagem"
              />
              <div className="p-5">
                <h2
                  className="
                    font-bold 
                    mb-3
                  "
                >
                  Processo de Reciclagem
                </h2>
                <p>
                  Entenda como os materiais descartados se transformam em novos
                  produtos. Conhecer o processo ajuda a valorizar e melhorar a
                  reciclagem.
                </p>
              </div>
            </div>

            <div className="justify-items-center">
              <img
                className="
                  w-3xs 
                  md:w-auto 
                  select-none
                "
                src="assets/img/Reciclagem.png"
                alt="Logo da reciclagem com a mensagem: Faça a diferença! Um simples gesto seu pode mudar o mundo!"
              />
            </div>
          </div>

          <div
            className="
              grid 
              md:grid-cols-2 
              gap-8 
              bg-[#d9d9d910] 
              border 
              border-[#0000001f] 
              overflow-hidden
            "
          >
            <img
              className="
                w-full 
                h-full 
                object-cover
              "
              src="assets/img/FacaVoceMesmo.png"
              alt="Imagem de pessoa reciclando"
            />
            <div className="p-5 self-center">
              <h2
                className="
                  font-bold 
                  mb-3
                "
              >
                Faça você mesmo
              </h2>
              <p>
                Aprenda a reaproveitar materiais e criar objetos úteis.
                Reciclagem também é criatividade na prática.
              </p>
            </div>
          </div>

          <h2 className="font-bold text-2xl mt-10">Curiosidades:</h2>
        </div>
      </section>

      <section
        className="
          bg-[#212121] 
          relative 
          z-10
          pb-16
        "
      >
        <InfoSection
          cor="vermelho"
          texto="
            Você sabia? O vermelho da reciclagem, que representa o plástico, é
            também a cor mais associada a alerta e perigo — e faz sentido: mais de
            400 milhões de toneladas de plástico são produzidas por ano, mas menos
            de 10% é reciclado. O resto fica como uma cicatriz vermelha no
            planeta, durando séculos.
          "
          icone="assets/svg/Garrafa.svg"
          descricao="Icone de Garrafa plastica."
          flip={false}
        />
        <InfoSection
          cor="cinza"
          texto="
            Você sabia? O cinza da reciclagem marca os rejeitos, tudo aquilo que não
            pode ser reaproveitado — e é literalmente a cor do desperdício. Cada saco
            cinza que vai pro aterro representa energia, água e matéria-prima que nunca
            voltam. É o tom daquilo que o sistema prefere esquecer.
          "
          icone="assets/svg/Lata.svg"
          descricao="Icone de Lata de Lixo."
          flip={true}
        />
        <InfoSection
          cor="amarelo"
          texto="
            Você sabia? O amarelo da reciclagem indica o metal — e não é à toa que
            chama atenção: metais como alumínio e aço são valiosos, mas quando vão
            pro lixo errado, se perdem para sempre. Cada lata ou tampinha desperdiçada
            é energia extra queima, minério extra explorado e um pedaço do planeta que
            nunca volta ao ciclo produtivo. É o tom do ouro que ignoramos.
          "
          icone="assets/svg/Ouro.svg"
          descricao="Icone de Barra de Ouro."
          flip={false}
        />
        <InfoSection
          cor="marrom"
          texto="
            Você sabia? O marrom da reciclagem representa o orgânico — restos de comida,
            cascas, podas. Parece inofensivo, mas cada bagaço que vai pro lixo errado vira
            metano no aterro, um gás que aquece o planeta muito mais rápido que o CO₂.
            É o tom daquilo que parecia natural, mas que, quando ignorado, se torna um
            pequeno desastre diário invisível.
          "
          icone="assets/svg/Banana.svg"
          descricao="Icone de Casca de Banana."
          flip={true}
        />
        <InfoSection
          cor="azul"
          texto="
            Você sabia? O azul da reciclagem marca o papel — jornais, caixas, revistas.
            Parece inofensivo, mas cada folha desperdiçada é árvore cortada, água e energia
            gastos que nunca retornam. O azul lembra que aquilo que ignoramos como “simples
            papel” carrega um peso ambiental silencioso: toneladas de recursos evaporam antes
            de chegarem ao aterro.
          "
          icone="assets/svg/Papel.svg"
          descricao="Icone de Folha de Papel."
          flip={false}
        />
        <InfoSection
          cor="verde"
          texto="
            Você sabia? O verde da reciclagem representa o vidro — garrafas, potes, frascos.
            Parece inerte, mas cada pedaço que vai pro lixo errado é areia extra extraída, energia
            desperdiçada no forno e matéria-prima que deixa de circular. O verde lembra que, mesmo
            sólido e transparente, o vidro descartado sem cuidado é um peso silencioso no planeta,
            que permanece intacto por séculos.
          "
          icone="assets/svg/Taca.svg"
          descricao="Icone de Taça de Vinho."
          flip={true}
        />
        <InfoSection
          cor="roxo"
          texto="
            Você sabia? O roxo da reciclagem marca os resíduos perigosos — pilhas, baterias,
            medicamentos e químicos. Cada item jogado fora no lugar errado é um veneno silencioso,
            pronto para contaminar solo e água. O roxo lembra que alguns descartes não apenas
            desaparecem: eles atacam, corroem e se acumulam, deixando cicatrizes profundas no planeta
            que podem durar gerações.
          "
          icone="assets/svg/Bateria.svg"
          descricao="Icone de Pilha."
          flip={false}
        />
      </section>
    </main>
  );
}

import foto from "@utils/photos";

export default function HomeSectionOne() {
  return (
    <div className="flex items-center my-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">
          Encontre seu melhor amigo com PittyFinder
        </h1>
        <div>
          <p className="text-md">
            No PittyFinder, acreditamos que todo animal merece um lar cheio de
            amor e carinho. Somos uma plataforma dedicada a conectar pessoas que
            querem adotar animais resgatados aos abrigos e ONGs de sua região.
            Navegue pelos nossos perfis de animais prontos para adoção e
            descubra cães, gatos e outros animais esperando por um lar.
          </p>
          <p className="text-md">
            Nosso objetivo é facilitar o processo de adoção responsável e ajudar
            a transformar vidas tanto a sua quanto a dos nossos amigos peludos.
            Conheça nossos parceiros, descubra histórias de resgate e faça parte
            dessa rede de amor e cuidado.
          </p>
          <p className="text-md">
            Pronto para encontrar seu próximo melhor amigo? Comece a busca agora
            e faça a diferença!
          </p>
        </div>
      </div>
      <img src={foto.HomeSection} alt="animal" width={350} />
    </div >
  );
}

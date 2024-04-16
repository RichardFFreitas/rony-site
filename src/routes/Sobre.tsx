import Nav from "@/components/Navbar";
import { Separator } from "../components/ui/separator";

const Sobre = () => {
  return (
    <>
      <Nav />
      <div className="text-center mt-20">
        <h1 className="font-semibold text-4xl">Sobre mim</h1>
        <Separator className="my-8" />
      </div>
      <div className="flex place-content-center flex-wrap items-center">
        <img
          className="rounded-full w-64 md:w-96"
          src="/Rony.jpg"
          alt="Rony"
        />
        <div className="w-full md:w-1/2 md:px-4 md:ml-12 ml-4">
          <p className="indent-8">
            Olá! Meu nome é Rony Batista, e tenho o prazer de servir como
            consultor imobiliário há mais de 2 anos e morador de Unamar há mais
            de 15 anos. Com uma profunda conexão com esta comunidade vibrante e
            uma paixão pela excelência no setor imobiliário, dedico-me a
            oferecer serviços de consultoria excepcionais e personalizados para
            meus clientes.
          </p>
          <h3 className="font-bold text-1xl mt-4">Expertise Local:</h3>
          <p>
            Minha experiência e conhecimento local são inigualáveis. Como
            morador de Unamar há mais de 15 anos, testemunhei em primeira mão o
            desenvolvimento e as nuances do mercado imobiliário nesta região.
            Este insight exclusivo me capacita a fornecer orientações precisas e
            valiosas aos meus clientes, ajudando-os a tomar decisões informadas
            e vantajosas em todas as transações imobiliárias.
          </p>
          <h3 className="font-bold text-1xl mt-4">Atendimento Excepcional:</h3>
          <p>
            A satisfação e o sucesso dos meus clientes são minha prioridade
            máxima. Ao trabalhar comigo, você pode esperar um serviço
            personalizado, transparente e dedicado em cada etapa do processo.
            Estou comprometido em compreender as necessidades exclusivas de cada
            cliente e em superar suas expectativas por meio de um atendimento
            excepcional e resultados positivos.
          </p>
          <br />
          <h3 className="font-bold text-1xl mt-4">Compromisso com a Região:</h3>
          <p>
            Como residente de longa data de Unamar, tenho um profundo amor e
            respeito por esta Região. Estou comprometido em contribuir para seu
            crescimento e bem-estar, não apenas por meio do meu trabalho como
            consultor imobiliário, mas também por meio de iniciativas e
            atividades que promovam o desenvolvimento sustentável e a qualidade
            de vida de todos os seus habitantes.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sobre;

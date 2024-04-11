import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BiBath, BiBed, BiCar, BiLogoWhatsapp } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge"


interface Residence {
  ID: number;
  Tipo: string;
  Endereco: string;
  Bairro: string;
  Area: number;
  Garagem: number;
  Quartos: number;
  Banheiros: number;
  Preco: number;
  Acomodacao: string;
  Disponibilidade: string;
  Foto1: string;
  Foto2: string;
  Foto3: string;
}

const sheetUrl = import.meta.env.REACT_APP_SHEETS_API;

function CardImmobile() {
  const [residences, setResidences] = useState<Residence[]>([]);

  const getResidenceData = async () => {
    try {
      const response = await axios.get(sheetUrl);
      const residenceData = response.data.data;
      setResidences(residenceData);
    } catch (error) {
      console.log("Erro ao obter dados de residência:", error);
    }
  };

  useEffect(() => {
    getResidenceData();
  }, []);


  return (
    <div>
      {residences.map((residence) => (
        <Card key={residence.ID} className="m-4 mt-8 w-[32rem] h-[38rem]">
          <CardHeader>
            <CardTitle>{residence?.Tipo}</CardTitle>
            <CardDescription>{residence?.Bairro}</CardDescription>
          </CardHeader>
          <CardContent className="p-0 mt-12 sm:mt-0 sm:pt-0">
            <Carousel className="w-92 h-40    mx-auto text-center">
              <CarouselContent>
                <CarouselItem className="rounded-md ">
                  <img
                    className="size-[24rem] w-[32rem]"
                    src={residence?.Foto1}
                    alt="slide photo 1"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="size-[24rem] w-[32rem]"
                    src={residence?.Foto2}
                    alt="slide photo 2"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    className="size-[24rem] w-[32rem]"
                    src={residence?.Foto3}
                    alt="slide photo 3"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
          <CardFooter className="block sm:mt-60 mt-48 ">
            <div className="flex flex-row-reverse">
              <Badge variant={"secondary"} className="price mr-4">{residence?.Preco}</Badge>
              <Badge variant={"avaible"} className="type mr-4">{residence?.Tipo}</Badge>
              <Badge variant={"unvaible"} className="avaible mr-4">{residence?.Disponibilidade}</Badge>
            </div>
            <div className="flex ml-2 ">
              <span className="mr-4 flex items-center">
                <BiBath className="mr-2" /> <b>{residence?.Banheiros}</b>
              </span>
              <span className="mr-4 flex items-center">
                <BiBed className="mr-2 " /> <b>{residence?.Quartos}</b>
              </span>
              <span className="flex items-center">
                <BiCar className="mr-2" /> <b>{residence?.Garagem}</b>
              </span>
            </div>
            <a href="https://wa.me/5522997426196">
                <Button type="button" className="mt-2" variant={"outline"}>
                  <BiLogoWhatsapp className="mr-4" /> Agende uma visita
                </Button>
              </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardImmobile;

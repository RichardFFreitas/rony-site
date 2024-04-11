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
import { Badge } from "@/components/ui/badge";

import getResidenceData from "../../services/api"

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


function CardImmobile() {
  const [residences, setResidences] = useState<Residence[]>([]);

  

  useEffect(() => {
    const fetchResidences = async () =>{
      const residenceData = await getResidenceData();
      setResidences(residenceData)
    }
    fetchResidences();
  }, []);

  function formatPrice(price: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }

  function getVariant(Disponibilidade: string):"avaible" | "unvaible" | "alocate"   {
    switch (Disponibilidade) {
      case "Disponivel":
        return "avaible";
      case "Vendido":
        return "unvaible";
      case "Indisponivel":
        return "alocate";
      default:
        return "avaible";
    }
  }

  return (
    <div className="flex justify-center flex-wrap">
      {residences
        .filter((residence) => Object.keys(residence).length !== 0)
        .map((residence) => (
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
              <div className={`flex flex-row-reverse`}>
                <Badge variant={"secondary"} className="type mr-4">
                  {residence?.Acomodacao}
                </Badge>
                <Badge variant={getVariant(residence.Disponibilidade)} className="avaible mr-4">
                  {residence?.Disponibilidade}
                </Badge>
              </div>
              <div className="flex ml-2 ">
                <span className="mr-2 flex items-center">
                  <BiBath className="mr-1" /> <b>{residence?.Banheiros}</b>
                </span>
                <span className="mr-2 flex items-center">
                  <BiBed className="mr-1 " /> <b>{residence?.Quartos}</b>
                </span>
                <span className="flex items-center">
                  <BiCar className="mr-1" /> <b>{residence?.Garagem}</b>
                </span>
              </div>
              <div className="flex items-center space-x-44">
                <a href="https://wa.link/0e3hn1">
                  <Button type="button" className="mt-2" variant={"outline"}>
                    <BiLogoWhatsapp className="mr-4" /> Agende uma visita
                  </Button>
                </a>
                <span className="mr-4 font-bold">
                  Preço: {formatPrice(residence?.Preco)}
                </span>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}

export default CardImmobile;

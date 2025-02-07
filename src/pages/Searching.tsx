import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Form from "../components/Layout/Form"
import Header from "../components/Layout/Header"
import Footer from "../components/Layout/Footer";
import { animals } from "../data/adopt";
import { shelters } from "../data/abrigos";
import CardMui from "../components/Atoms/CardMui";
import { Container } from "@mui/material";

export default function Searching() {
    const location = useLocation();
    const [searchingType, setSearchingType] = useState("");

    const navigate = useNavigate();
    const handleCardClick = (id: number, route: string) => {
        if (route === "animal") navigate(`/animal/${id}`)
        if (route === "shelter") navigate(`/shelter/${id}`);
    };

    useEffect(() => {
        if (location.pathname === "/animal") {
            setSearchingType("animal")
        } else if (location.pathname === "/shelter") {
            setSearchingType("shelter")
        }
    }, [location.pathname])

    return (
        <div>
            <Container maxWidth="md">
                <Header />
                <Form
                    firstLabel={searchingType === "animal" ? "animal" : "estado"}
                    secondLabel={searchingType === "animal" ? "estado" : "cidade"}
                    thirdLabel={searchingType === "animal" ? "cidade " : "bairro(opicional)"}
                />
                <h1 className="font-bold text-3xl my-4">Resultados</h1>
                <div>
                    {searchingType === "animal" ? (
                        <div className="grid filter-responsive justify-items-center gap-4 my-6">
                            {animals.map(animal => (
                                <CardMui
                                    key={animal.id}
                                    image={animal.foto}
                                    title={animal.nome}
                                    description={animal.cidade + " / " + animal.estado}
                                    onClick={() => handleCardClick(animal.id, "animal")}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="grid filter-responsive justify-items-center gap-4 my-6">
                            {shelters.map(shelter => (
                                <CardMui
                                    key={shelter.id}
                                    onClick={() => handleCardClick(shelter.id, "shelter")}
                                    image={shelter.foto}
                                    title={shelter.nome}
                                    description={shelter.ficha.local.rua}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Container>
            <Footer />
        </div>
    );
}
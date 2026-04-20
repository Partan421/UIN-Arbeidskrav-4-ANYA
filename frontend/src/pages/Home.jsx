import { useEffect, useState } from "react";
import client from "../sanity/client";
import YacobProfil from "../Components/YacobProfil";
import AnnaProfil from "../Components/AnnaProfil";
import "../Style/home.scss";

export default function Home(){
    const [krav, setkrav] = useState([])

    useEffect(() =>{
        client
        .fetch(`*[_type == "arbeidskrav"]{title, description}`)
        .then((data) => setkrav(data))
        .catch((error) => console.error("Sanity error", error))
    }, []);

    return(
        <main>
            <header>
                <h1>Gruppe 11 - Arbeidskrav 4</h1>
            </header>

            <section>
                <h2>Gruppemedlemmer</h2>
                <article className="profiles">
                <YacobProfil />
                <AnnaProfil />
                </article>
            </section>

            <section>
                <h2>Tidligere Arbeidskrav</h2>
                {krav.length === 0 ? 
                (<p>Laster inn Arbeidskrav</p>
                ) : (
                    <ul>
                        {krav.map((item, index) => (
                            <li key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </main>
    );
}
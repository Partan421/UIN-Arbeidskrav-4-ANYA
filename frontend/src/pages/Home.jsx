import { useEffect, useState } from "react";
import client from "../sanity/client";
import YacobProfil from "../Components/YacobProfil";
import AnnaProfil from "../Components/AnnaProfil";
import "../Style/arbeidskrav.scss";
import "../Style/home.scss";

export default function Home(){
    const [krav, setKrav] = useState(null)

    useEffect(() =>{
        async function fetchArbeidskrav(){
            const alleKrav = await client.fetch(
                "*[_type == 'arbeidskrav']{title, description}"
            );
            setKrav(alleKrav)
        }
        fetchArbeidskrav();
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
                {krav === null ? 
                (<p>Laster inn Arbeidskrav</p>
                ) : (
                    <ul className="arbeidskrav-list">
                        {krav.map((item, index) => (
                            <li key={index} className="arbeidskrav-card">
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
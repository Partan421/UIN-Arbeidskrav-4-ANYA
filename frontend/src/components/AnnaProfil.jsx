import "../Style/AnnaProfil.scss"
import bildeForAnna from "../Images/Yuko-xHolic.jpg";


export default function AnnaProfil() {
    return(
        <section className="Annas-profil">
            <header>
                <h2>Anna</h2>
            </header>
            <figure>
                <img src={bildeForAnna} alt="Bildet for Anna"/>
            </figure>
            <article>
                <h3>Oversikt:</h3>
                <ul>
                    <li>
                        Skole e-mail: <a href="mailto:aangyen@hiof.no"
                        className="email-lenke">
                            aanguyen@hiof.no
                        </a>
                    </li>
                    <li>
                        Privat e-mail: <a href="mailto:anna_nguye97@hotmail.com"
                        className="email-lenke">
                            anna_nguyen97@hotmail.com
                        </a> 
                    </li>
                    <li>Telefon nummer: 46440617</li>
                    <li>Studier: Bachelorstudium i informasjonssystemer</li>
                </ul>
            </article>
        </section>
    )
}
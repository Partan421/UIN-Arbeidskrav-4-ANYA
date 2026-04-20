import "../Style/YacobProfil.scss"

export default function YacobProfil(){
    return(
        <section className="profil">
            <header>
                <h2>Yacob</h2>
            </header>
            <figure>
                <img src="../Images/QinShiHuang.jpg"
                alt="Bilde for Yacob"
                />
            </figure>
            <article>
                <h3>Info</h3>
                <ul>
                    <li>
                        Skole E-post:
                        <a href="mailto:myzahid.hiof.no"
                        className="profil-link"
                        >
                            myzahid@hiof.no
                        </a>
                    </li>
                    <li>
                        Privat E-post:
                        <a href="mailto:yacob.th.zahid@gmail.com"
                        className="profil-link"
                        >
                            yacob.th.zahid@gmail.com
                        </a>
                    </li>
                    <li>Telefon: 98648639</li>
                    <li>Studier: Informasjonssystemer</li>
                </ul>
            </article>
        </section>
    )
}
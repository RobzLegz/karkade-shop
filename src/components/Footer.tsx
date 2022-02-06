import Link from "next/link";
import React from "react";

function Footer() {
    return (
        <footer className="">
            <div className="">
                <strong className="">MŪSU KOMPĀNIJA</strong>

                <Link href="/">
                    <p className="">Par mums</p>
                </Link>

                <Link href="/">
                    <p className="">Mūsu veikali</p>
                </Link>

                <Link href="/">
                    <p className="">Privātuma politika</p>
                </Link>

                <Link href="/">
                    <p className="">Lietošanas noteikumi un nosacījumi</p>
                </Link>

                <Link href="/">
                    <p className="">Juridisks paziņojums</p>
                </Link>

                <Link href="/">
                    <p className="">Kontakti</p>
                </Link>
            </div>

            <div className="">
                <strong className="">JŪSU PROFILS</strong>

                <Link href="/">
                    <p className="">Personīgā informācija</p>
                </Link>

                <Link href="/">
                    <p className="">Pasūtījumi</p>
                </Link>

                <Link href="/">
                    <p className="">Kredīta izraksti</p>
                </Link>
            </div>

            <div className="">
                <strong className="">VEIKALA INFORMĀCIJA</strong>

                <Link href="/">
                    <p className="">Karkadē</p>
                </Link>

                <Link href="/">
                    <p className="">SIA "Karkadē"</p>
                </Link>

                <Link href="/">
                    <p className="">Tērbatas iela 19/21, Rīga, LV-1010</p>
                </Link>

                <Link href="/">
                    <p className="">Reg.nr.50103327811</p>
                </Link>

                <Link href="/">
                    <p className="">Telefona nr.: +37126621676</p>
                </Link>

                <Link href="/">
                    <p className="">E-pasts: <a href="mailto: karkade@karkade.lv">karkade@karkade.lv</a></p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;

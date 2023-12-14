import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar(){
    return(
         <header className="text-center mb-8 w-full h-28 bg-violet-300 drop-shadow flex items-center place-content-between p-4">
      <Image src="/mf.svg"
      width={64}
      height={64}/>
      <h2 className="text-sm">Shop moi</h2>
        <Link className="hover:text-white" href="/">Accueil</Link>
        <Link className="hover:text-white" href="/aboutus">Qui sommes nous?</Link>
        <Link className="hover:text-white" href="/shop">Boutique</Link>
        <Link className="hover:text-white" href="/contact">Contact</Link>
        <Link className="hover:text-white" href="/signup">Inscription</Link>
        <Link className="hover:text-white" href="/signup">Connexion</Link>
      </header>
    )
}
import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { TbCircleArrowUp } from "react-icons/tb";

import Header from '../../Components/Header/Main/Header';
import Hero from "../../Components/Inicio/Hero";
import Destaques from "../../Components/Inicio/Destaques";
import Contato from "../../Components/Footer/Main/Contato";

import "../../Styles/main.scss";
import { AutenticadoContexto } from "../../Contexts/authContexts";

export default function DashBoardCliente() {
    const { verificarToken } = useContext(AutenticadoContexto);
    verificarToken();

    return (
        <div>
            <Header />
            <main>
                {/* <Hero /> */}
                <Destaques />
            </main>
            <Link to='/perfil' className='btn__login'><CgProfile /></Link>
            <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
            <Contato />
        </div>
    );
};
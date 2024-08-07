import React from "react";

import { TbCircleArrowUp } from "react-icons/tb";

import Header from '../Components/Header';
import Hero from "../Components/Hero";
import Destaques from "../Components/Destaques";
import Espaco from "../Components/Espaco";
import Delivery from "../Components/Delivery";
import Contato from "../Components/Contato";
import ModalLogin from '../Components/ModalLogin';

import "../Styles/main.scss";

export default function App() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Hero />
                <Destaques />
                <Espaco />
                <Delivery />
            </main>
            <ModalLogin />
            <a href='#head' className='btn__up'><TbCircleArrowUp /></a>
            <footer>
                <Contato />
            </footer>
        </div>
    );
};
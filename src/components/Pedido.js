import React from "react";
import { useNavigate } from 'react-router-dom';

import Pizza from "../Imgs/pizza1-1.jpg";

export default function Pedido() {
    const navigate = useNavigate();

    function confPed() {
        navigate('/pedido-confirmado')
    }

    return (
        <div>
            <div className="hsection" id="dlvr">
                <h2>Pedido</h2>
            </div>
            <section className="delivery">
                <div className="container">
                    <img src={Pizza} alt="Pizza de Frango com Bacon" />
                    <div className="delivery__text">
                        <h4>
                            Pizza de Frango com Bacon.
                        </h4>
                        <p>
                            Frango, Bacon, Milho e Azeitona.
                        </p>
                        <p>
                            Tempo estimado para entrega: 33 minutos.
                        </p>
                        <p>
                            Valor: R$66,66
                        </p>
                        <button onClick={confPed} className="btn" type="submit">Confirmar Pedido</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
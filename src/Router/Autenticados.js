import React from 'react';

import AutCliente from './AutCliente.routes';
import AutEmpresa from './AutEmpresa.routes';

export default function Autenticados() {

    const AutEmp = false;

    return (
        <>
            {AutEmp === true ? <AutEmpresa /> : <AutCliente />}
        </>
    );
};
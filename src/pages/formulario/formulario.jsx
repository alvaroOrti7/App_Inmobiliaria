import { useEffect, useRef } from 'react';
import './Formulario.css';
import Header from './header/header';

const Formulario = () => {
    const formularioRef = useRef(null);

    useEffect(() => {
        if (formularioRef.current) {
            hbspt.forms.create({
                region: "eu1",
                portalId: "139725651",
                formId: "8f46d1de-7a7a-42bf-80e2-ebc8cc992081",
                target: '#formulario-container',
            });
        }
    }, []);

    return (
        <div>
            <Header />
            <h1 id="formu">Solicita una demo</h1>
            <section>
                <div id="formulario-container" ref={formularioRef}>
                </div>
            </section>
        </div>
    );
};

export default Formulario;
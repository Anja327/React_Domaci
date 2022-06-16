import PredlogForma from "../komponente/PredlogForma";
import { useState } from 'react'

function Predlog() {

    const [unetaVrednost, setUnetaVrednost] = useState('');

    function postaviVrednost(imeprezime, predlog, email) {

        setUnetaVrednost("Uneto ime i prezime: " + imeprezime + "       " +
            "Unet predlog za film/seriju: " + predlog + '\n' +
            "Unet email: " + email
        )
    }

    return (
        <div className="divpredlog">
            <h1 id="predlognaslov">Predložite nam film/seriju!</h1>
            <PredlogForma postaviVrednost={postaviVrednost} unetaVrednost={unetaVrednost} />
        </div>
    )
}

export default Predlog;
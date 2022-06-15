import { useState } from 'react'


function PredlogForma() {

    const [imeprezime, setImeprezime] = useState('');
    const [naziv, setNaziv] = useState('');
    const [email, setEmail] = useState('');

    function ipHandle(e) {
        setImeprezime(e.target.value)
    }

    function emailHandle(e) {
        setEmail(e.target.value)
    }

    function nazivHandle(e) {
        setNaziv(e.target.value)
    }


    return (
        <div className="divpredlogforma">

            <div className="predlogforma">

                <label>Ime i prezime </label>
                <input type="text" className="form-control mb-2" value={imeprezime} onChange={ipHandle} />

                <label>Naziv filma/serije </label>
                <input type="text" className="form-control mb-2" value={naziv} onChange={nazivHandle} />

                <label>Email </label>
                <input type="text" className="form-control mb-2" value={email} onChange={emailHandle} />

                <button type="button" className="btn btn-primary mt-2">Pošalji predlog</button>
            </div>
        </div>
    )
}

export default PredlogForma;
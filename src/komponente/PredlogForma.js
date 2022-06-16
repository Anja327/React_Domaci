import { useState } from 'react'


function PredlogForma(props) {

    const [imeprezime, setImeprezime] = useState('');
    const [naziv, setNaziv] = useState('');
    const [email, setEmail] = useState('');
    const [uneteVrednosti, setUneteVrednosti] = useState('');

    function ipHandle(e) {
        setImeprezime(e.target.value)
    }

    function emailHandle(e) {
        setEmail(e.target.value)
    }

    function nazivHandle(e) {
        setNaziv(e.target.value)
    }

    function handleVrednost() {
        setUneteVrednosti(props.unetaVrednost)
    }


    return (
        <div className="divpredlogforma">

            <div className="predlogforma">

                <label>Ime i prezime </label>
                <input type="text" className="form-control mb-2" value={imeprezime} onChange={ipHandle} />

                <label>Naziv filma/serije </label>
                <input type="text" className="form-control mb-2" value={naziv} onChange={nazivHandle} />

                <label>Email </label>
                <input type="email" className="form-control mb-2" value={email} onChange={emailHandle} />

                <button type="button" onClick={() => { props.postaviVrednost(imeprezime, naziv, email); handleVrednost(); }} className="btn btn-primary mt-2">Pošalji predlog</button>
            </div>

            <div className="divunetevrednosti">
                {uneteVrednosti}
            </div>

        </div >
    )
}

export default PredlogForma;
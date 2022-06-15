import { useState } from 'react'

function SemaPrikaz(props) {

    var superStar = props.superStar;
    var pinkFilm = props.pinkFilm;
    var hbo = props.hbo;
    var izbor = props.izbor;

    const [sema, setSema] = useState('');

    function prikazSeme() {

        if (izbor == 'superStar') {

            var prikaz = superStar.map((item) => {
                return (
                    <p key={item.id}>{item.vreme} - {item.naslov}</p>
                )
            });

            setSema(prikaz);
        }


        if (izbor == 'pinkFilm') {

            var prikaz = pinkFilm.map((item) => {
                return (
                    <p key={item.id}>{item.vreme} - {item.naslov}</p>
                )
            });

            setSema(prikaz)
        }


        if (izbor == 'hbo') {

            var prikaz = hbo.map((item) => {
                return (
                    <p key={item.id}>{item.vreme} - {item.naslov}</p>
                )
            });

            setSema(prikaz);
        }

    }



    return (
        <div className="divsemaprikaz">
            <button type="button" className="btn btn-danger" onClick={prikazSeme}>Prikaži</button>

            <div className="prikazsemediv">
                {sema}
            </div>


        </div>
    )
}

export default SemaPrikaz;
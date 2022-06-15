import { useState } from 'react';
import SemaPrikaz from './SemaPrikaz';

function Sema() {


    var superStar = [
        { id: 1, vreme: '08:00', naslov: "FILM: TOP GUN" },
        { id: 2, vreme: '12:00', naslov: "SERIJA: DRŽAVNI POSAO" },
        { id: 3, vreme: '15:00', naslov: "SERIJA: KLAN" },
        { id: 4, vreme: '18:00', naslov: "FILM: ZABRANJENO KRALJEVSTVO" },
        { id: 5, vreme: '21:00', naslov: "FILM: KRALJ PETAR " },
        { id: 6, vreme: '00:00', naslov: "FILM: OTKAČENI PROFESOR" },
        { id: 7, vreme: '02:00', naslov: "FILM: LIKVIDATOR" },
        { id: 8, vreme: '05:00', naslov: "SERIJA: ZBORNICA" },
    ]

    var pinkFilm = [
        { id: 1, vreme: '08:00', naslov: "FILM: DOKTOR LUDOSTI" },
        { id: 2, vreme: '12:00', naslov: "FILM: ZAJEDNO" },
        { id: 3, vreme: '15:00', naslov: "FILM: MEHANIZAM" },
        { id: 4, vreme: '18:00', naslov: "FILM: VREME ČUDA" },
        { id: 5, vreme: '21:00', naslov: "FILM: VOJNICI" },
        { id: 6, vreme: '00:00', naslov: "FILM: HAJKA" },
        { id: 7, vreme: '02:00', naslov: "FILM: VIRTUELNA STVARNOST" },
        { id: 8, vreme: '05:00', naslov: "FILM: ŠEŠIR PROFESORA KOSTE VUJIĆA" },
    ]

    var hbo = [
        { id: 1, vreme: '08:00', naslov: "FILM: ANGRY BIRDS" },
        { id: 2, vreme: '12:00', naslov: "FILM: HOLIVUD NA SNIMANJU" },
        { id: 3, vreme: '15:00', naslov: "FILM: PETI SET" },
        { id: 4, vreme: '18:00', naslov: "FILM: AMERIČKA TURŠIJA" },
        { id: 5, vreme: '21:00', naslov: "FILM: TENET" },
        { id: 6, vreme: '00:00', naslov: "FILM: CRNO ZLATO" },
        { id: 7, vreme: '02:00', naslov: "FILM: SRODNICI" },
        { id: 8, vreme: '05:00', naslov: "FILM: HENKOK" },
    ]

    const [izbor, setIzbor] = useState();

    function selectHandle(e) {
        setIzbor(e.target.value);
    }

    return (
        <div className="divsema">
            <select className="form-select" id="izborprogramaselect" onChange={selectHandle}>
                <option>Izaberi</option>
                <option value={"pinkFilm"}>PinkFilm</option>
                <option value={"superStar"}>SUPERSTAR</option>
                <option value={"hbo"}>HBO</option>
            </select>

            <SemaPrikaz superStar={superStar} pinkFilm={pinkFilm} hbo={hbo} izbor={izbor} />

        </div>
    )
}

export default Sema;
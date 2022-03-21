const faculties = {
    "UK": [
        <option value="Katolická teologická fakulta">Katolická teologická fakulta</option>,
        <option value="Evangelická teologická fakulta">Evangelická teologická fakulta</option>,
        <option value="Husitská teologická fakulta">Husitská teologická fakulta</option>,
        <option value="Právnická fakulta">Právnická fakulta</option>,
        <option value="1. lékařská fakulta">1. lékařská fakulta</option>,
        <option value="2. lékařská fakulta">2. lékařská fakulta</option>,
        <option value="3. lékařská fakulta">3. lékařská fakulta</option>,
        <option value="Lékařská fakulta v Plzni">Lékařská fakulta v Plzni</option>,
        <option value="Lékařská fakulta v Hradci Králové">Lékařská fakulta v Hradci Králové</option>,
        <option value="Farmaceutická fakulta v Hradci Králové">Farmaceutická fakulta v Hradci Králové</option>,
        <option value="Filozofická fakulta">Filozofická fakulta</option>,
        <option value="Přírodovědecká fakulta">Přírodovědecká fakulta</option>,
        <option value="Matematicko-fyzikální fakulta">Matematicko-fyzikální fakulta</option>,
        <option value="Pedagogická fakulta">Pedagogická fakulta</option>,
        <option value="Fakulta sociálních věd">Fakulta sociálních věd</option>,
        <option value="Fakulta tělesné výchovy a sportu">Fakulta tělesné výchovy a sportu</option>,
        <option value="Fakulta humanitních studií">Fakulta humanitních studií</option>,
    ],
    "VŠE": [
        <option value="Fakulta financí a účetnictví">Fakulta financí a účetnictví</option>,
        <option value="Fakulta mezinárodních vztahů">Fakulta mezinárodních vztahů</option>,
        <option value="Fakulta podnikohospodářská">Fakulta podnikohospodářská</option>,
        <option value="Fakulta informatiky a statistiky">Fakulta informatiky a statistiky</option>,
        <option value="Národohospodářská fakulta">Národohospodářská fakulta</option>,
        <option value="Fakulta managementu">Fakulta managementu</option>
    ],
    "ČVUT": [
        <option value="Fakulta stavební (FSv)">Fakulta stavební (FSv)</option>,
        <option value="Fakulta strojní (FS)">Fakulta strojní (FS)</option>,
        <option value="Fakulta elektrotechnická (FEL)">Fakulta elektrotechnická (FEL)</option>,
        <option value="Fakulta jaderná a fyzikálně inženýrská (FJFI)">Fakulta jaderná a fyzikálně inženýrská (FJFI)</option>,
        <option value="Fakulta architektury (FA)">Fakulta architektury (FA)</option>,
        <option value="Fakulta dopravní (FD)">Fakulta dopravní (FD)</option>,
        <option value="Fakulta biomedicínského inženýrství (FBMI)">Fakulta biomedicínského inženýrství (FBMI)</option>,
        <option value="Fakulta informačních technologií (FIT)">Fakulta informačních technologií (FIT)</option>
    ],
    "ČZU": [
        <option value="Provozně ekonomická fakulta">Provozně ekonomická fakulta</option>,
        <option value="Fakulta agrobiologie, potravinových a přírodních zdrojů">Fakulta agrobiologie, potravinových a přírodních zdrojů</option>,
        <option value="Technická fakulta">Technická fakulta</option>,
        <option value="Fakulta životního prostředí">Fakulta životního prostředí</option>,
        <option value="Fakulta lesnická a dřevařská">Fakulta lesnická a dřevařská</option>,
        <option value="Fakulta tropického zemědělství">Fakulta tropického zemědělství</option>,
        <option value="Institut vzdělávání a poradenství">Institut vzdělávání a poradenství</option>,
    ]
}

function App() {
    return (
        <div className="container p-3">
            <h1 className="mb-3">Formulár Študenta</h1>
            <div className="row">
                <div className="col">
                    <div className="mb-1">
                        <label className="form-label" htmlFor="name">Meno</label>
                        <input className="form-control" type="text" name="name" id="name"/>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" id="email"/>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="year">Ročník narodenia</label>
                        <input className="form-control" type="number" name="year" id="year"/>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="school">Univerzita</label>
                        <select className="form-control">
                            <option value="">Prosím vyberte univerzitu</option>
                            <option value="CVUT">ČVUT</option>
                            <option value="UK">Univerzita Karlova</option>
                            <option value="CZU">Česká Zemědelská Univerzita</option>
                            <option value="VSE">Vysoká Škola Ekonomická</option>
                        </select>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="faculty">Fakulta</label>
                        <select className="form-control">
                            <option value="">Prosím vyberte fakultu</option>
                        </select>
                    </div>
                    <div className="mb-1">
                        <p>Etapa štúdia</p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="stage" id="bachelor" value="bachelor"/>
                            <label className="form-check-label" htmlFor="bachelor">Bakalárska</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="stage" value="master" id="master"/>
                            <label className="form-check-label" htmlFor="master">Magisterská</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="stage" value="doctor" id="doctor"/>
                            <label className="form-check-label" htmlFor="doctor">Doktorská</label>
                        </div>
                    </div>
                    <div className="form-check mb-1">
                        <input className="form-check-input" type="checkbox" name="distance" id="distance"/>
                        <label className="form-check-label" htmlFor="distance">
                            Distancne studium
                        </label>
                    </div>
                    <div className="mb-1">
                        <label className="form-label" htmlFor="message">Správa (max 200 znakov)</label>
                        <textarea className="form-control" name="message" id="message" cols="30" rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit">Odoslať</button>
                </div>
                <div className="col" style={{backgroundColor: '#f8f9fa', padding: '1rem'}}>
                    <div>
                        <pre>{JSON.stringify({
                            name: "meno",
                            email: "email",
                            year: "rocnik",
                            university: "univerzita",
                            faculty: "fakulta",
                            stage: "etapa studia",
                            distance: "distancne studium",
                            message: "sprava"
                        }, null, 4)}</pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

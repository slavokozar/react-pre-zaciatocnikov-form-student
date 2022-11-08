function App() {
    return (
        <div className="container p-3">
            <h1 className="mb-3">Formulár Študenta</h1>
            <div className="row">
                <div className="col">
                    <form action="">
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
                                <input className="form-check-input" type="radio" name="stage" id="bachelor"
                                       value="bachelor"/>
                                <label className="form-check-label" htmlFor="bachelor">Bakalárska</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="stage" value="master"
                                       id="master"/>
                                <label className="form-check-label" htmlFor="master">Magisterská</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="stage" value="doctor"
                                       id="doctor"/>
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
                            <textarea className="form-control" name="message" id="message" cols="30"
                                      rows="10"></textarea>
                        </div>
                        <button className="btn btn-primary" type="submit">Odoslať</button>
                    </form>
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

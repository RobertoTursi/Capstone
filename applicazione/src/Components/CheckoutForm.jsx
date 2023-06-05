import { ChevronDownIcon } from "@heroicons/react/24/outline"

const  CheckoutForm= () => {



    const province = ["Agrigento|AG", "Alessandria|AL", "Ancona|AN", "Aosta|AO", "Arezzo|AR", "Ascoli Piceno|AP", "Asti|AT", "Avellino|AV", "Bari|BA", "Barletta-Andria-Trani|BT", "Belluno|BL", "Benevento|BN", "Bergamo|BG", "Biella|BI", "Bologna|BO", "Bolzano|BZ", "Brescia|BZ", "Brindisi|BR", "Cagliari|CA", "Caltanissetta|CL", "Campobasso|CB", "Carbonia-Iglesias|CI", "Caserta|CE", "Catania|CT", "Catanzaro|CZ", "Chieti|CH", "Como|CO", "Cosenza|CZ", "Cremona|CR", "Crotone|KR", "Cuneo|CN", "Enna|EN", "Fermo|FM", "Ferrara|FE", "Firenze|FI", "Foggia|FG", "Forlì-Cesena|FC", "Frosinone|FR", "Genova|GE", "Gorizia|GO", "Grosseto|GR", "Imperia|IM", "Isernia|IS", "La Spezia|SP", "LAquila|SQ", "Latina|LT", "Lecce|LE", "Lecco|LC", "Livorno|LI", "Lodi|LO", "Lucca|LU", "Macerata|MC", "Mantova|MN", "Massa e Carrara|MS", "Matera|MT", "Medio Campidano|VS", "Messina|ME", "Milano|MI", "Modena|MO", "Monza e Brianza|MB", "Napoli|NA", "Novara|NO", "Nuoro|NU", "Ogliastra|OG", "Olbia-Tempio|OT", "Oristano|OR", "Padova|PD", "Palermo|PA", "Parma|PR", "Pavia|PV", "Perugia|PG", "Pesaro e Urbino|PU", "Pescara|PE", "Piacenza|PC", "Pisa|PI", "Pistoia|PT", "Pordenone|PN", "Potenza|PZ", "Prato|PO", "Ragusa|RG", "Ravenna|RA", "Reggio Calabria|RC", "Reggio Emilia|RE", "Rieti|RI", "Rimini|RN", "Roma|RM", "Rovigo|RO", "Salerno|SA", "Sassari|SS", "Savona|SV", "Siena|SI", "Siracusa|SR", "Sondrio|SO", "Taranto|TA", "Teramo|TE", "Terni|TR", "Tornino|TO", "Trapani|TP", "Trento|TN", "Treviso|TV", "Trieste|TS", "Udine|UD", "Varese|VA", "Venezia|VE", "Verbano-Cusio-Ossola|VB", "Vercelli|VC", "Verona|VR", "Vibo Valentia|VV", "Vicenza|VI", "Viterbo|VT"]


    

  return (
    <>

    aggiustare il form con gli onchange e gli onSubmit
        {/* <form onSubmit={confirmOrder} className=" rounded pb-8 mb-4 relative">
    
            <input required className="mt-4 bg-slate-200 p-5 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="nome" type="text" 
            // placeholder="Name" value={nome} onChange={e => setNome(e.target.value)}/>
            placeholder="Nome *" value={""} onChange={""}/>
    
            <input required className="mt-4 bg-slate-200 p-5 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="cognome" type="text" 
            placeholder="Cognome *" value={""} onChange={""}/>
    
            <input required className="mt-4 bg-slate-200 p-5 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" 
            placeholder="Indirizzo e-mail *" value={""} onChange={""}/>
    
            <input required className="mt-4 bg-slate-200 p-5 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="indirizzo" type="text" 
            placeholder="Indirizzo *" value={""} onChange={""}/>
    
            <input required className="mt-4 bg-slate-200 p-5 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="città" type="text" 
            placeholder="Città *" value={""} onChange={""}/>
    
            <input required className="mt-4 bg-slate-200 p-5 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="cap" type="text" 
            placeholder="Codice Postale *" value={""} onChange={""}/>
    
            <div className="relative">
            <ChevronDownIcon disabled className="icon-style-2 absolute top-[40px] right-[15px]"/> 
                <select className="mt-4 bg-slate-200 p-6 shadow appearance-none border rounded w-full px-3 text-gray-700 
                leading-tight focus:outline-none focus:shadow-outline" name="provincia" id="provincia" form="provinciaform">
                      
                    <option value={null} >Stato/provincia * </option>
                    {province?.map((provincia, i) => (
                        
                        <option key={i} value={provincia.substring(0, provincia.length - 3)}>{provincia.substring(0, provincia.length - 3)}</option>
                    ))}
                 
                </select>
                
            </div>
            <textarea className="mt-4 bg-slate-200 p-6 shadow appearance-none border rounded w-full px-3 text-gray-700 
            leading-tight focus:outline-none focus:shadow-outline" id="note" name="story" rows="1" cols="33" placeholder="Note">
    
            </textarea>
            <button>Conferma ordine</button>
        </form>
        <span className="text-slate-500 text-sm">* campi obbligatori</span> */}
    </>
  )
}

export default CheckoutForm
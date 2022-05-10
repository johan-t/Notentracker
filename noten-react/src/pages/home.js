import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
function HomePage() {
    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <span className="Kurs-Name">Infomatik GK</span>
                <span className="Klasse-Name">Klasse 11</span>
           </div>
       </header>
       <body>
        <div className="Uebersicht">
          <div className="UebersichtBox">
            Durchschnitt: <span className="Variablen">1,1 </span>
          </div>
          <div className="UebersichtBox">
            Note: <span className="Variablen">123456 </span>
          </div>
          <div className="UebersichtBox">
            Punkte Tendenz: <span className="Variablen">1,12 </span>
          </div>
          <button className="NoteHinzufuegen">
            <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
          </button>
        </div>
        <div className="NeueNoteOverlay">
          <form>
            <label className="LabelOben">Punkte</label>
            <input className="NeueNoteBox" min="0" max="15" required="number" type="number"/>
            <label className="LabelUnten">0 bis 15</label>
            <label className="LabelOben">Leistung</label>
            <input className="NeueNoteBox" maxlength="50" required="required" type="text"/>
            <label className="LabelUnten">max. 50 Zeichen</label>
            <label className="LabelOben">Datum</label>
            <input className="NeueNoteBox" required="required" type="date"/>
            <label className="LabelUnten"></label>
            <span><button type="submit">Note hinzufügen</button><button type="reset">Reset</button></span>
          </form>
        </div>
       </body>
       </>
    );
}

export default HomePage;

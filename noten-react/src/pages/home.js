import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import React from "react";
import Pencil from "./pencil.png"
import User from "./user.png"
import Zeile from "../compontents/Zeile";
import NeueNoteOverlay from "../compontents/NeueNoteOverlay";


function HomePage() {
    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <span className="Kurs-Name">Infomatik GK</span>
                <div className="divider"></div>
                <span className="Klasse-Name">Klasse 11</span>
           </div>

           <div className="Lehrer-Semester">
                <div className="Key-LS">
                    <p className="Lehrkraft">Lehrkraft:</p>
                    <p className="Halbjahr">Halbjahr:</p>
                </div>
                <div className="Value-LS">
                    <p className="Schwarzbach">Herr Schwarzbach</p>
                    <p className="Q2">Q2</p>
                </div>
                <div className="circle">
                    <img className="pencil-icon" src={Pencil} alt="pencil-icon"></img>
                </div>
           </div>

           <div className="user-block">
                <img className="user-icon" src={User} alt="user-icon"></img>
                <span className="UserName">User1</span>
                <div className="divider" style={{left: '100px', top: '5px', height:'30px'}}></div>
                <span className="abmelden">abmelden</span>
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
          <button onClick={NeueNoteOverlay} className="NoteHinzufuegen">
            <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
          </button>
        </div>
           <div className="divider-lang"></div>
            <div className="tabelle">
                <div className="Kopfzeile">
                    <span className="punkte">Punkte</span>
                    <div className="spalte"></div>
                    <span className="note">Note</span>
                    <div className="spalte" style={{left: '375px'}}></div>
                    <span className="leistung">Leistung</span>
                    <div className="spalte" style={{left: '575px'}}></div>
                    <span className="datum">Datum</span>
                    <div className="kopfzeilen-divider"></div>
                </div>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
                <Zeile></Zeile>
            </div>

       </body>
       </>
    );
}

export default HomePage;

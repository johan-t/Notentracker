import { FaPlusCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import React from "react";
import { RiPencilFill } from "react-icons/ri"
import User from "./user.png"
import Zeile from "../compontents/Zeile";
import NeueNoteOverlay from "../compontents/NeueNoteOverlay";


function HomePage() {
    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <span className="Kurs-Name">Kurs/Klasse</span>
                <div className="divider"></div>
                <span className="Klasse-Name">Jahrgang</span>
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
                    <RiPencilFill className="PencilIcon" size="1.5em"/>
           </div>

           <div className="user-block">
                <img className="user-icon" src={User} alt="user-icon"></img>
                <span className="UserName">User1</span>
                <div className="divider" style={{left: '100px', top: '5px', height:'30px'}}></div>
                <span className="abmelden">abmelden</span>
           </div>
       </header>
       <body>
       {/*Rechte Seite unten Statistiken*/}
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
          <button onClick=<NeueNoteOverlay/> className="NoteHinzufuegen">
            <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
          </button>
        </div>
      {/*Tabelle*/}
        <table className="Tabelle">
          <tr>
            <th>Punkte</th>
            <th>Note</th>
            <th>Leistung</th>
            <th>Datum</th>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
          <tr>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
            <td>blas</td>
          </tr>
        </table>
        {/*
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

            </div>*/}
       </body>
       </>
    );
}

export default HomePage;

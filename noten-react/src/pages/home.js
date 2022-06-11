import React from "react";
import { IconContext } from "react-icons";
import {FaUser} from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import {FaPlusCircle} from "react-icons/fa";
import NeueNoteOverlay from "../components/NeueNoteOverlay";
import TabelleZeile from "../components/TabelleZeile";
import { useState } from "react";

function HomePage(props) {
  //function to pass input to TableZeile
  const [data, setData] = useState('');

  const childToParent = (childData) => {
   setData(childData);
}

    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <b>Kurs/Klasse</b><span className="Teiler"/><b>Jahrgang</b>
           </div>
           <div className="Lehrer-Semester">
              <b>Lehrkraft: </b>
              <span>LehrerVariabel</span><br/>
              <b>Halbjahr: </b>
              <span>Zeitraum</span>
              <RiPencilFill className="PencilIcon" size="1.5em"/>
          </div>
           <div className="user-block">
                <FaUser className="UserIcon"/><b>username</b><span className="Teiler"/><b>abmelden</b>
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
          <NeueNoteOverlay childToParent={childToParent}/>
        </div>
      {/*Tabelle*/}
      <div className="containerDiv">
        <table className="Tabelle">
          <tr>
            <th>Punkte</th>
            <th>Note</th>
            <th>Leistung</th>
            <th>Datum</th>
          </tr>
          <TabelleZeile punkt={data.punkt} note={data.note} leistung={data.leistung} datum={data.datum}/>
          <TabelleZeile />
          <TabelleZeile/>
          <TabelleZeile/>
          <TabelleZeile/>
        </table>
        </div>
       </body>
       </>
    );
}

export default HomePage;

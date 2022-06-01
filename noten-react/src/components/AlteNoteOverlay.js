import React from "react";
import {CgCloseR} from "react-icons/cg";
import { useState } from "react";

function AlteNoteOverlay() {
    console.log("works!")

    const [show, setShow] = useState(false);

     const toggleAlteNote = () => {
         setShow(!show);
    };
    return (
        <form className="NeueNoteOverlay" >
        <CgCloseR onClick={toggleAlteNote} cursor="pointer" size="1.5em" color="#FF5757" className="NeueNoteClose"/>
        <h2 align="middle">Note hinzufügen</h2>
        <label className="LabelOben">Punkte</label>
        <input className="NeueNoteBox" min="0" max="15" required="number" type="number"/>
        <label className="LabelUnten">0 bis 15</label>
        <label className="LabelOben">Leistung</label>
        <input className="NeueNoteBox" maxlength="50" required="required" type="text"/>
        <label className="LabelUnten">max. 50 Zeichen</label>
        <label className="LabelOben">Datum</label>
        <input className="NeueNoteBox" required="required" type="date" />
        <label className="LabelUnten"></label>
        <span>
          <button className="NeueNoteSubmit" type="submit">Note hinzufügen</button>
          <button className="NeueNoteReset" type="reset">Reset</button>
        </span>
      </form>
    );
}

export default AlteNoteOverlay;
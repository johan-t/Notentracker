import React from "react";
import { IconContext } from "react-icons";
import {CgCloseR} from "react-icons/cg";
import { useState } from "react";

function NeueNoteOverlay() {
  return (
    <div className="NeueNoteOverlay">
      <form>
        <CgCloseR/>
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
  );
}

export default NeueNoteOverlay;

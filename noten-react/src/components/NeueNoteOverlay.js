import React from "react";
import {IconContext} from "react-icons";
import {CgCloseR} from "react-icons/cg";
import {FaPlusCircle} from "react-icons/fa";
import {useState} from "react";

function NeueNoteOverlay() {

  const [NeueNote, setNeueNote] = useState(false);
  const [punkt, setPunkt] = useState('');
  const [leistung, setLeistung] = useState('')
  const [datum, setDatum] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = {punkt, leistung, datum}
    console.log(input)
  }



  const toggleNeueNote = () => {
  setNeueNote(!NeueNote);
  };

  return (
    <>
      <button onClick={toggleNeueNote} className="NoteHinzufuegen">
        <FaPlusCircle color="white" size="2em" style={{verticalAlign:"middle"}}/> Neue Note
      </button>
      {NeueNote && (
        <form className="NeueNoteOverlay" onSubmit={handleSubmit}>
          <CgCloseR onClick={toggleNeueNote} cursor="pointer" size="1.5em" color="#FF5757" className="NeueNoteClose"/>
          <h2 align="middle">Note hinzufügen</h2>
          <label className="LabelOben">Punkte</label>
          <input className="NeueNoteBox" min="0" max="15" required="number" type="number" value={punkt} onChange={(e)=> setPunkt(e.target.value)}/>
          <label className="LabelUnten">0 bis 15</label>
          <label className="LabelOben">Leistung</label>
          <input className="NeueNoteBox" maxlength="50" required="required" type="text" value={leistung} onChange={(e)=> setLeistung(e.target.value)}/>
          <label className="LabelUnten">max. 50 Zeichen</label>
          <label className="LabelOben">Datum</label>
          <input className="NeueNoteBox" required="required" type="date" value={datum} onChange={(e)=> setDatum(e.target.value)}/>
          <label className="LabelUnten"></label>
          <span>
            <button className="NeueNoteSubmit" type="submit">Note hinzufügen</button>
            <button className="NeueNoteReset" type="reset">Reset</button>
          </span>
        </form>
      )}
    </>
  );
}

export default NeueNoteOverlay;

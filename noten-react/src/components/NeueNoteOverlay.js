import React from "react";
import {IconContext} from "react-icons";
import {CgCloseR} from "react-icons/cg";
import {FaPlusCircle} from "react-icons/fa";
import {useState} from "react";

function NeueNoteOverlay(props) {

  const [NeueNote, setNeueNote] = useState(false);
  const [punkt, setPunkt] = useState('');
  const [leistung, setLeistung] = useState('')
  const [datum, setDatum] = useState('')

  var note;
  const notenCalculation = () => {
    if (punkt >= 13) {note = 1}
    else if (punkt <= 12 && punkt >=10) {note = 2}
    else if (punkt <= 9 && punkt >=7) {note = 3}
    else if (punkt <= 6 && punkt >=4) {note = 4}
    else if (punkt <= 3 && punkt >=1) {note = 5}
    else {note = 6}
    return note;
  }
 notenCalculation();

 var id;
 const randomIdbetween1and10000 = () => {
    id = Math.floor(Math.random() * 10000) + 1;
 }
  randomIdbetween1and10000();

  const input = {punkt, leistung, datum, note, id }
  const data = input;

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <button className="NeueNoteSubmit" type="submit" onClick={() => props.childToParent(data)}>Note hinzufügen</button>
            <button className="NeueNoteReset" type="reset">Reset</button>
          </span>
        </form>
      )}
    </>
  );
}

export default NeueNoteOverlay;

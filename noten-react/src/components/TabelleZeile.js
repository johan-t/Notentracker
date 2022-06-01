import React from "react";
import AlteNoteOverlay from "../components/AlteNoteOverlay";
import { useState } from "react";

function TabelleZeile(props) {

  const [show, setShow] = useState(true);

  const toggleAlteNote = () => {
    setShow(!show);
    };

    return (
      <>
      <tr onClick={toggleAlteNote}>
        <td>{props.punkte}</td>
        <td>{props.note}</td>
        <td>{props.leistung}</td>
        <td>{props.datum}</td>
      </tr>
      {show && <AlteNoteOverlay/>}
      </>
    );
}
export default TabelleZeile;

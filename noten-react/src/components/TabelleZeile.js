import React from "react";

function TabelleZeile(props) {
    return (
      <tr>
        <td>{props.punkte}</td>
        <td>{props.note}</td>
        <td>{props.leistung}</td>
        <td>{props.datum}</td>
      </tr>
    );
}
export default TabelleZeile;

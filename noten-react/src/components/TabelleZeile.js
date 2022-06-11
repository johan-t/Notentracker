import React from "react";

function TabelleZeile(props) {
    return (
      <tr>
        <td>{props.punkt}</td>
        <td>{props.note}</td>
        <td>{props.leistung}</td>
        <td>{props.datum}</td>
        <td>{props.id}</td>
      </tr>
    );
}
export default TabelleZeile;

import React from "react";

function Zeile(props) {
    return (
        <div>
            <div className="zeile-content">
                <span className="punkte-zeile">15</span>
                <span className="note-zeile">1</span>
                <span className="leistung-zeile">Test</span>
                <span className="datum-zeile">1.5.22</span>
            </div>
            <div className="zeilen-divider"></div>
        </div>
    );
}
export default Zeile;
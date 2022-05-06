import React from "react";
import Pencil from "./pencil.png"
import User from "./user.png"
import Zeile from "../compontents/Zeile";


function HomePage() {
    return (
       <>
       <header>
           <div className="Kurs-Overview">
                <span className="Kurs-Name">Infomatik GK</span>
                <div className="divider"></div>
                <span className="Klasse-Name">Klasse 11</span>
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
                <div className="circle">
                    <img className="pencil-icon" src={Pencil} alt="pencil-icon"></img>
                </div>
           </div>

           <div className="user-block">
                <img className="user-icon" src={User} alt="user-icon"></img>
                <span className="UserName">User1</span>
                <div className="divider" style={{left: '100px', top: '5px', height:'30px'}}></div>
                <span className="abmelden">abmelden</span>
           </div>
       </header>
       <body>
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
            </div>
            
       </body>
       </>
    );
}

export default HomePage;

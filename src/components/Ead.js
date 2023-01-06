import React, { Component } from "react";



class Ead extends Component {
    render() {
        return (

            <div className="ead-container">
                <h1>Where is the nearest defibrillation to you?</h1>
                <p>
                    Uninterrupted CPR is an important factor in increasing the recovery rate of cardiac arrest patients.
                    Always ensure that someone is providing CPR for the victim unless the AED machine is actively analysing or shocking the victim.
                    "Be on the safe side find out where the nearest defibrillator is to you, you never know when you’ll need it" (CFR Ireland)
                </p>
                <i className="fa-solid fa-heart-circle-bolt"></i>
                <p></p>
                <table className="table-container">
                    <tr>
                        <td className="table-title">Location of external AED’s</td>
                        <td className="table-title"> Availability</td>
                    </tr>
                    <tr>
                        <td>Droichead Family Resource Centre</td>
                        <td>24/7 Dial 999/112 for code</td>
                    </tr>
                    <tr>
                        <td>John Locke’s</td>
                        <td>24/7 Dial 999/112 for code</td>
                    </tr>
                    <tr>
                        <td className="table-title">Location of internal AED’s</td>
                        <td className="table-title">Availability</td>
                    </tr>
                    <tr>
                        <td>Mount Carmel</td>
                        <td>24/7 Staff on site</td>
                    </tr>
                    <tr>
                        <td>Strathmore Lodge (Aperee Living)</td>
                        <td>24/7 Staff on site</td>
                    </tr>
                    <tr>
                        <td>Top Shop, West Street</td>
                        <td>08.00 am – 21.00 pm</td>

                    </tr>
                    <tr>
                        <td>Callan Medical Centre</td>
                        <td>08.30 am – 17.00 pm (Mon-Friday)</td>
                    </tr>
                    <tr>
                        <td>Callan Dental</td>
                        <td>09.00 – 17.00pm (Monday-Saturday)</td>
                    </tr>
                    <tr>
                        <td> The Handball Alley</td>
                        <td>Playing times only</td>
                    </tr>
                    <tr>
                        <td>Bunscoil McAuley Rice</td>
                        <td>School Term</td>
                    </tr>
                    <tr>
                        <td>Coláiste Abhainn Rí (1 AED on each site)
                            </td>
                        <td>School Term </td>
                    </tr>

                </table>
                <p className="event">
                In the event of a sudden cardiac arrest, a person's chance of survival decreases by 7-10% each minute an AED is delayed. By combining CPR & an AED immediately, you can improve a person's chance of surviving sudden cardiac arrest by upwards of 75%.
                </p>
            </div>
        )
    }
}

export default Ead;
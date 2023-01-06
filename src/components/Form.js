import React, { Component } from "react";



class Form extends Component {
    render() {
        return (


            <div className="form-container">
                <div className="form-color"></div>
                <h1 className="form-title">CFR Enquiry Form</h1>
                <form>
                    <label className="form-label col-xl-3 col-sm-6 col-12">
                        Full Name:
                        <input type="text" name="name" className="form-control" />
                    </label>

                    <label className="form-label col-xl-4 col-sm-6 col-12">
                        Address:
                        <input type="text" name="surname" className="form-control" />
                    </label>

                    <label className="form-label col-xl-3 col-sm-8 col-12">
                        Eircode:
                        <input type="text" name="adress" className="form-control" />
                    </label>

                    <label className="form-label col-xl-2 col-sm-4 col-12">
                        Mobile:
                        <input type="text" number="number"  className="form-control"/>
                    </label>

                    <p>Do you have a full license and a car ?</p>
                    <label className="form-label">
                        Yes
                        <input type="radio" name="license" className="form-check-input"/>
                    </label>

                    <label className="form-label">
                        No
                        <input type="radio" name="license" className="form-check-input" />
                    </label>

                        <p>Do you have any previous experience in First aid / CPR ? (This is not essential however is an advantage).
                            Full training will be given, so is not prior training is not mandatory.</p>
                    <label className="form-label col-12">
                        <input type="text" className="form-control" />
                    </label>

                    <p>Are you available at weekends?</p>
                    <label className="form-label">
                        Yes
                        <input type="radio" name="weekends" className="form-check-input" />
                    </label>

                    <label className="form-label">
                        No
                        <input type="radio" name="weekends"  className="form-check-input"/>
                    </label>

                    <p>Are you available weekdays?</p>
                    <label className="form-label">
                        Yes
                        <input type="radio" name="weekends" className="form-check-input" />
                    </label>

                    <label className="form-label">
                        No
                        <input type="radio" name="weekends" className="form-check-input" />
                    </label>

                    <p>Is there any other experience that you may have that could benefit the group? Fundraising, marketing, accounts etc?</p>
                    <label className="form-label">
                        <input type="text"  className="form-control"/>
                    </label>
                    
                    <p>Thank you very much for contacting us and I look forward to talking to you soon. What time is best to contact you to chat further?</p>
                    <label className="form-label">
                        <input type="text" className="form-control" />
                    </label>
                    <label>
                        <input type="submit" />
                    </label>
                
                </form>

            </div>
        )
    }
}

export default Form;
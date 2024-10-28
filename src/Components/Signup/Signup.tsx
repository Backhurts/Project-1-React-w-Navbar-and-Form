import React from 'react'
import './Signup.css'

export default function Signup() {
    return (
        <div id='MainDiv'>
            <div>
                <h4>Name</h4>
                <input name="FirstName" id="FirstName" type="text" placeholder="First" />
                <input name="LastName" id="LastName" type="text" placeholder="Last" />
            </div>
            <div>
                <h4>Choose your username</h4>
                <input name="Email" className="lone" id="Email" type="email" placeholder="@gmail.com" />
            </div>
            <div>
                <h4>Create a password</h4>
                <input name="Password" className="lone" id="Password" type="password" placeholder="" />
            </div>
            <div>
                <h4>Confirm your password</h4>
                <input className="lone" id="ConfirmPass" type="password" placeholder="" />
            </div>
            <div>
                <h4>Birthday</h4>
                <select name="Month" id="Month">
                    <option disabled selected value="">Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="Jul">Jul</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
                <input name="Day" id="Day" type="number" min="0" max="32" step="1" placeholder="Day" />
                <input name="Year" id="Year" type="number" min="1923" max="2023" step="1" placeholder="Year" />
                <br />
                <input id="Submit" type="submit" value="Submit"></input>
            </div>

        </div>

    )
}

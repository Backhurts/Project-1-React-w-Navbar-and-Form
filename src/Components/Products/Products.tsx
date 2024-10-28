import React from 'react'
import './Products.css'

export default function Products() {
    return (
        <div className='productPage'>
            <div className='productDiv' id='item1'>
                <img className='productImg' src={require("./Monitor.png")} alt="" />
                <h3>Gaming Monitor</h3>
                <h4>120-300USD</h4>
                <h3>1920x1080</h3>
                <h3>24 inch display</h3>
                <select name="Monitor" id="monitorMenu">
                    <option disabled selected value="">Refresh Rate</option>
                    <option value="60Hz">60Hz</option>
                    <option value="120Hz">120Hz</option>
                    <option value="144Hz">144Hz</option>
                    <option value="240Hz">240Hz</option>
                </select>

            </div>

            <div className='productDiv' id='item2'>
                <img className='productImg' src={require("./Headset.png")} alt="" />
                <h3>Gaming Headset</h3>
                <h4>60-100USD</h4>
                <h3>built in mic</h3>
                <h3>adjustable</h3>
                <select name="Headset" id="headsetMenu">
                    <option disabled selected value="">Sound System</option>
                    <option value="Stereo">Stereo</option>
                    <option value="7.1 Surround">7.1 Surround</option>
                </select>

            </div>

            <div className='productDiv' id='item3'>
                <img className='productImg' src={require("./Ipod.jpg")} alt="" />
                <h3>iPod 4th gen</h3>
                <h4>120USD</h4>
                <h3>16gb memory</h3>
                <h3>16 Hour battery life</h3>
                <select name="Ipod" id="ipodMenu">
                    <option disabled selected value="">Color</option>
                    <option value="Pink">Pink</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                </select>

            </div>

            <div className='productDiv' id='item4'>
                <img className='productImg' src={require("./Ipad.png")} alt="" />
                <h3>iPad Air</h3>
                <h4>599USD</h4>
                <h3>64gb memory</h3>
                <h3>12 hour battery life</h3>
                <select name="Ipad" id="ipadMenu">
                    <option disabled selected value="">Color</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                </select>

            </div>
        </div>
    )
}

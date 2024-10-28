import React from 'react'
import { NavItem } from '../../Models/NavItem'
import { Link } from 'react-router-dom'
import './Navbar.css'

export function Navbar(props: { navItems: NavItem[] }) {
    return (

        <div className='navbarDiv'>
            <Link to={'/Home'}>
                <h1 className='logo' >PC Store</h1>
            </Link>
            {/* I could remove the h1 entirely for optimisation */}

            {props.navItems.map((curr) => {
                return <Link className='links' to={curr.theURL}>{curr.title.toUpperCase()}</Link>

            })}


        </div>
    )
}

import React from "react";
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return(<header className={classes.header}>
        <div className="name">Patrick</div>
        <nav>
            <ul>
                <li>
                    <NavLink className={(navlink)=>navlink.isActive?classes.active:''} to='/'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navlink)=>navlink.isActive?classes.active:''} to='/about'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navlink)=>navlink.isActive?classes.active:''} to='/projects'>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink className={(navlink)=>navlink.isActive?classes.active:''} to='/contacts'>
                        Contacts
                    </NavLink>
                </li>
            </ul>
            
            
            
            
        </nav>
    </header>)
}

export default Header
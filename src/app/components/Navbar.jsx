import React from 'react';
import NavLink from './NavLink';

const navLinks = [
    {
        title: "About",
        path: "/about",
    },
    {
        title: 'Projects',
        path: '/projects',
    },
    {
        title: 'Contact',
        path: '/contact',
    }
];

export default function Navbar() {

    return (
        <nav>
            <ul>
                {navLinks.map((link, index) => 
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                )}
            </ul>
        </nav>
    );
}
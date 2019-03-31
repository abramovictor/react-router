import React, { Component } from 'react';
import { Link } from './Link';

export const Sidebar = (props) => {
    return (
        <aside>
            <nav className="nav nav-tabs mb-5 shadow-sm bg-light">
                <Link href="/index.html" active={true}>JavaScript</Link>
                <Link href="/index.html">React</Link>
                <Link href="/index.html">Angular</Link>
                <Link href="/index.html">Node.js</Link>
            </nav>
        </aside>
    );
}

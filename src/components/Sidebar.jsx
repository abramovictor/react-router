import React from 'react';
import { Link } from './Link';

export const Sidebar = ({ topics }) => {
    return (
        <aside>
            <nav className="nav nav-tabs mb-5 shadow-sm bg-light">
                {topics.map(({ id, title }) =>
                    <Link
                        key={id}
                        className="nav-link nav-item"
                        to={`/books/${id}`}>
                        {title}
                    </Link>
                )}
            </nav>
        </aside>
    );
}

import React, { Component } from 'react';

import { Sidebar } from '../components/Sidebar';
import { Cards } from '../components/Cards';
import { Book } from './Book';

export const Pricing = (props) => {
    return (
        <main className="py-5">
            <div className="container">
                <h2 className="display-4 mb-4">
                    {props.title}
                </h2>

                <Sidebar />

                <Cards books={props.books} />
            </div>
        </main>
    );
}
import React, { Component } from 'react';

import { Nav } from '../components/Nav';
import { Card } from '../components/Card';

export const Pricing = (props) => {
    return (
        <main className="py-5">
            <div className="container">
                <h2 className="display-4 mb-4">
                    {props.title}
                </h2>
                <div className="row">
                    <div className="col-xl-2">
                        <Nav />
                    </div>
                    <div className="col-xl">
                        <div className="row">

                            {props.books.map(({ title, description, cover }, index) =>
                                <div className="col-xl-6 mb-5" key={index} >
                                    <Card title={title} description={description} cover={cover} />
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
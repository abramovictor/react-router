import React, { Component } from 'react';

export const Card = ({ cover, title, description, href }) => {
    const source = require(`../img/books/${cover}`);

    return (
        <div className="card card-pricing shadow h-100">
            <img src={source} className="card-img-top shadow" alt={title} height="200" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description.length > 150 ? description.slice(0, 150).concat('...') : description }</p>

                <div className="mt-auto">
                    <a href={href} className="btn btn-secondary btn-block btn-sm">Learn More</a>
                </div>
            </div>
        </div>
    );
}

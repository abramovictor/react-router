import React, { Component } from 'react';

export const Cards = (props) => {
    return (
        <div className="row">
            {props.books.map(({ title, description, cover }, index) =>
                <div className="col-xl-6 mb-5" key={index} >
                    <div className="card flex-row card-pricing shadow h-100">
                        <header className="card-img-top shadow">
                            <img src={require(`../img/books/${cover}`)} alt={title} />
                        </header>
                        <section className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                {description.length > 150 ? description.slice(0, 150).concat('...') : description}
                            </p>
                            <div className="mt-auto">
                                <a href="#!" className="btn btn-secondary btn-block btn-sm">Learn More</a>
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </div>

    );
}

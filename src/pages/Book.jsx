import React, { Component } from 'react';

export const Book = (props) => {
    let { cover, title, description, author, publisher, year, pages } = props.data;

    return (
        <div className="card shadow card-book">
            <div className="d-flex">
                <header className="card-img-top shadow">
                    <img src={require(`../img/books/${cover}`)} alt="Learning JavaScript" />
                </header>

                <section className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </section>
            </div>

            <section className="card-footer">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Author</th>
                            <td>{author}</td>
                        </tr>
                        <tr>
                            <th>Publisher</th>
                            <td>{publisher}</td>
                        </tr>
                        <tr>
                            <th>Year</th>
                            <td>{year}</td>
                        </tr>
                        <tr>
                            <th>Pages</th>
                            <td>{pages}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

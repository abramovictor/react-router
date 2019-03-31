import React from 'react';
import { Link } from './Link';

export const Card = (props) => {
    let { cover, title, author, publisher, year, topic, slug } = props.book;
    author = author.length >= 30 ? author.slice(0, 30).concat('...') : author;

    return (
        <div className="card card-pricing shadow h-100">
            <div className="d-flex">
                <header className="card-img-top shadow">
                    <img src={('/').concat(require(`../img/books/${cover}`))} alt={title} />
                </header>
                <section className="card-body">
                    <h5 className="card-title">{title}</h5>
    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <strong>Author: </strong>{author}
                        </li>
                        <li className="list-group-item">
                            <strong>Publisher: </strong>{publisher}
                        </li>
                        <li className="list-group-item">
                            <strong>Year: </strong>{year}
                        </li>
                    </ul>
                </section>
            </div>
            <footer className="card-footer mt-auto">
                <Link className="btn btn-secondary btn-block btn-sm" to={`/books/${topic}/${slug}`}>
                    Learn More
                </Link>
            </footer>
        </div>
    );
}

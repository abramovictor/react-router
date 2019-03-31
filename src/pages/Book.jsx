import React from 'react';

export const Book = ({ books, match }) => {
    const book = books.find(book => book.slug === match.params.book);
    let { cover, title, description, author, publisher, year, pages } = book;

    return (
        <div className="card flex-row shadow card-book">
            <header className="card-img-top shadow">
                <img src={('/').concat(require(`../img/books/${cover}`))} alt={title} />
            </header>

            <section className="card-body">
                <h5 className="card-title">{title}</h5>

                <ul className="list-group list-group-flush mb-4">
                    <li className="list-group-item">
                        <strong>Author: </strong>{author}
                    </li>
                    <li className="list-group-item">
                        <strong>Publisher: </strong>{publisher}
                    </li>
                    <li className="list-group-item">
                        <strong>Year: </strong>{year}
                    </li>
                    <li className="list-group-item">
                        <strong>Pages: </strong>{pages}
                    </li>
                </ul>
                <p className="card-text">{description}</p>
            </section>

        </div>
    );
}

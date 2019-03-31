import React from 'react';
import { Card } from '../components/Card';

export const Books = ({ books: data, match }) => {
    const books = match.params.topic ? data.filter(book => book.topic === match.params.topic) : data;

    return (
        <div>
            <div className="row">
                {books.map(book =>
                    <div className="col-xl-6 mb-5" key={book.title} >
                        <Card book={book} />
                    </div>
                )}
            </div>
        </div>
    );
}
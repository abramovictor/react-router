import React from 'react';

export const Content = (props) => {
    return (
        <main className="py-5">
            <div className="container">
                {props.children}
            </div>
        </main>
    );
}

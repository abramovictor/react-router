import React, { Component } from 'react';

export const About = (props) => {
    return (
        <main className="py-5">
            <div className="container">
                <h2 className="display-4 mb-4">
                    About Us
                </h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, alias cupiditate! Quia molestiae vitae, inventore, perspiciatis tenetur aliquid explicabo distinctio perferendis hic</p>

                <ol>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                    <li>Dolore magni exercitationem impedit quibusdam minima, eius corporis.</li>
                    <li>Aperiam nesciunt fuga, sint repellat est minima ea.</li>
                    <li>Suscipit, alias ea? Reiciendis fuga necessitatibus quasi excepturi?</li>
                    <li>Nam obcaecati ex itaque ab porro incidunt adipisci.</li>
                </ol>

                <div className="row">
                    <div className="col-xl-6">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputMessage1">Message</label>
                                <textarea type="text" className="form-control" id="exampleInputMessage1" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
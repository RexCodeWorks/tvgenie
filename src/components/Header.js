import React from 'react';

function Header({ searchQuery, handleChange, handleSearch }) {
    return (
        <header className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <h1 className="navbar-item">Movie List</h1>
                    <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <form onSubmit={handleSearch} className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input" type="text" value={searchQuery} onChange={handleChange} placeholder="Search movies" />
                            </p>
                            <p className="control">
                                <button className="button is-primary" type="submit">Search</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;

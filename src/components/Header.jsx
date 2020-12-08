import React from 'react'
import { Link } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import './Header.scss'

class Header extends React.Component {

    isAuthenticated() {
        const token = this.props.cookies.get('token')

        if (!token || token === "undefined" || token === "null") {
            return false
        }

        return true
    }

    render() {
        return (

            <header id="site-header">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        
                        <Link to="/" className="navbar-brand">
                            <img src="img/mrktplc.png" alt="logo" />
                        </Link>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">MRKTPLC <span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Events
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/events" className="dropdown-item">Show All</Link>
                                        <Link to="/events/new" className="dropdown-item">Create New</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Listings
                                    </Link>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link to="/users/listings" className="dropdown-item">Show All</Link>
                                        <Link to="/listing/new" className="dropdown-item">Create New</Link>
                                    </div>
                                </li>
                            </ul>

                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>

                            <ul className="navbar-nav mr-auto float-right" id="profile-dropdown">

                            {
                                this.isAuthenticated() ? (
                                    <li className="nav-item dropdown">
                                        <Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Profile
                                        </Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to="/users/profile" className="dropdown-item">Update</Link>
                                            <Link to="/users/events" className="dropdown-item">Event</Link>
                                            <Link to="/users/listings" className="dropdown-item">Listing</Link>
                                        </div>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <Link to="/users/login" className="nav-link">Login</Link>
                                    </li>
                                )
                            }

                            </ul>

                        </div>
                    </div>

                </nav>
            </header>

        )
    }
}

export default withCookies(Header)
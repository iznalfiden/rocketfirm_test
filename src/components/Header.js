import * as React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

export default function Header1() {

    const styles = {
        height: "350px",
        left: "0px",
        top: "0px",
        background: "#000000"
    }

    const hrStyle = {
        height: "0px",
        background: "#FFFFFF",
    }

    const linkStyles = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <header>
            <div style={styles} className="container-fluid">
                <div className="container">
                    <nav>
                    <div className="row pt-5 d-flex align-items-center">
                        <div className="col lg-6 justify-content-center">
                            <div className="d-flex align-items-center">
                                <Link style={linkStyles} to={"/"}>
                                    <div className="d-flex align-items-center text-white">
                                        <img className="mr-3" src="logo.png" alt="logo" />
                                        <h2 className="d-none d-md-block mt-1">ImageStock</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-end text-white">
                            <Link style={linkStyles} to={"/favorites"}>
                                <div className="mr-3 d-flex align-items-center">
                                    <img className="mr-2" src="favorite.png" alt="favorite" />
                                    <span className="d-none d-md-block">Избранное</span>
                                </div>
                            </Link>
                            <Link style={linkStyles} to={"/history"}>
                                <div className="d-flex mr-3 justify-content-center align-items-center">
                                    <img className="mr-2" src="searchHistory.png" alt="searchHistory" />
                                    <span className="d-none d-md-block">История поиска</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    </nav>
                    <div className="row mt-5">
                        <div className="col d-flex justify-content-center text-white mt-4">
                            <SearchForm />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col p-1">
                            <hr style={hrStyle} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
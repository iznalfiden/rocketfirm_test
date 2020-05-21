import React from 'react'
import { Link } from 'react-router-dom'
import SearchForm from './SearchForm'

function PhotoPageHeader() {

    const styles1 = {
        background: "black",
        height: "81px",

    }

    const linkStyles = {
        color: "white",
        textDecoration: "none"
    }


    return (
        <div style={styles1} className="container-fluid">
            <div className="container">
                <div className="row pt-4 pl-3 pr-3">
                    <div className="col-2">
                        <div className="d-flex align-items-center">
                            <Link style={linkStyles} to={"/"}>
                                <div className="d-flex align-items-center">
                                    <img src="logo.png" alt="logo" />
                                    <span className="text-white d-none d-md-block pl-2">ImageStock</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col-10 d-flex justify-content-end">
                        <div className="row pt-1">
                            <div className="col pb-lg-5 d-flex justify-content-center align-items-center">
                                <img className="pr-2" src="search.png" alt="logo" />
                                <SearchForm />
                            </div>
                            <div className="col pb-lg-5">
                                <Link style={linkStyles} to={"/favorites"}>
                                    <div className="d-flex justify-content-center align-items-center ">
                                        <img className="pr-2 " src="favorite.png" alt="favoritee" />
                                        <span className="d-none d-md-block">Избранное</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-auto">
                                <Link style={linkStyles} to={"/history"}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <img className="pr-2" src="searchHistory.png" alt="searchHistory" />
                                        <span className="d-none d-md-block">История поиска</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoPageHeader
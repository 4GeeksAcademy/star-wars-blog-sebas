import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { FaHeart } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { AppConfig } from "../config/config";
import { SearchBar } from "./SearchBar";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();
  const favorites = store.favorites;
  const image = AppConfig.navbar;

  const handleDeleteFavorite = (fav) => {
    console.log("favorito a borrar: ", fav);
    dispatch({
      type: "remove_from_favorites",
      payload: fav,
    });
  };

  return (
    <nav className="navbar sticky-top navbar-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img src={`${image.imageurl}`} className="logo"></img>
          </span>
        </Link>
        <SearchBar />
        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="favorites-icon-wrapper">
                <FaHeart className="icon-favorites" />
                <span className="favorites-count">{`${favorites.length}`}</span>
              </div>
              <strong>Favorites</strong>
            </button>
            <ul className="dropdown-menu">
              {favorites.length === 0 ? (
                <li className="dropdown-item text-muted">No favorites yet</li>
              ) : (
                favorites.map((fav, index) => (
                  <li key={index}>
                    <div className="dropdown-item d-flex justify-content-between align-items-center">
                      <Link
                        to={`/${fav.endpoint}/${fav.uid}`}
                        className="text-decoration-none text-dark"
                      >
                        {fav.name}
                      </Link>
                      <MdDeleteOutline
                        className="icon-delete"
                        onClick={() => handleDeleteFavorite(fav)}
                      />
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

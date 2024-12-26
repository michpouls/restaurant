import React, { useState } from "react";
import s from "./Navigation.module.scss";

export const Navigation = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
        setIsNavOpen(true);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <nav className={s.navBar}>
                <div className={s.navLogo}>
                    <h1>Sushimai?</h1>
                </div>
                <span
                    className={s.openbtn}
                    onClick={openNav}
                >
                    &#9776;
                </span>
            </nav>
            <div
                id="myNav"
                className={`${s.overlay} ${isNavOpen ? s.open : ""}`}
            >
                <a
                    href="#"
                    className={s.closebtn}
                    onClick={(e) => {
                        e.preventDefault();
                        closeNav();
                    }}
                >
                    &times;
                </a>
                <div className={s.overlayContent}>
                    <a href="#">Welcome</a>
                    <a href="#">Reservation</a>
                    <a href="#">Menu</a>
                    <a href="#">Bar & Drinks</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>

        </>
    );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalWindow from "../../MiniCartModal";

import "./Navbar.scss";

const Navbar = () => {
    let [modalVisibility, setModalVisibility] = useState(false);

    return (
        <ul className='navbar'>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/about"}>About</Link>
            </li>

            <li style={{ float: "right" }}>
                <Link to={"/account"}>
                    <i className='fa-solid fa-user'></i>
                </Link>
            </li>

            <li
                style={{ float: "right" }}
                onMouseOver={() => setModalVisibility(true)}
                onMouseOut={() => setModalVisibility(false)}>
                <Link to={"/cart"}>
                    <i className='fa-solid fa-cart-shopping'></i>
                </Link>
            </li>

            {modalVisibility && (
                <ModalWindow
                    onMouseOver={() => setModalVisibility(true)}
                    onMouseOut={() => setModalVisibility(false)}></ModalWindow>
            )}
        </ul>
    );
};
export default Navbar;

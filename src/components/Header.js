import React,  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import Logo from "./img/Fondo1.png";
import { useHistory } from "react-router-dom";

function Header() {

    let history = useHistory();
	const handleClickPersonales = (e) => {
		history.push("/Character");
	};

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="#">
                    <img src={Logo} width="40px"/>
                </a>
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="" onClick={handleClickPersonales}>Personajes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Episodios</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0 ml-1">
                    <input class="form-control mr-sm-2" type="search" placeholder="" aria-label=""/>
                    <button class="btn btn-outline-success-yellow my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </nav>
        </>
    )
}

export default Header

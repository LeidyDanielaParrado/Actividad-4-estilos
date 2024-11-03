import PropTypes from "prop-types";
import BottonAtom from "./components/BottonAtom";
import "/src/styles/Header.scss";


const Header = ({ setShowComponent }) => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <BottonAtom text="Agregar Tarea" value={true} setShowComponent={setShowComponent} />
                    <BottonAtom text="Ver Tareas" value={false} setShowComponent={setShowComponent} />
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    setShowComponent: PropTypes.func.isRequired,
};

export default Header;

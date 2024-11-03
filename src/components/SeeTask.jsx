import PropTypes from "prop-types";
import "/src/styles/SeeTask.scss";


const SeeTask = ({ listTask }) => {
    const elements = listTask.map((item, index) => (
        <li key={index} className="task-item">
            <h2>{item.title || "Sin título"}</h2>
            <p>{item.description || "Sin descripción"}</p>
        </li>
    ));

    return (
        <div className="see-task">
            <h1>Lista de tareas</h1>

            <ul className="task-list">{elements}</ul>
        </div>
    );
};

SeeTask.propTypes = {
    listTask: PropTypes.array.isRequired,
};

export default SeeTask;

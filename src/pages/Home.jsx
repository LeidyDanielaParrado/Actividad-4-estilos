import { useState } from "react";

import AddTask from "../components/AddTask";
import Header from "../components/header/Header";
import SeeTask from "../components/SeeTask";
import "/src/styles/Home.scss"

function Home() {
    const [showCmponent, setShowComponent] = useState(true);
    const [listTask, setlistTask] = useState([]);

    return (
        <div className="home">
            <Header setShowComponent={setShowComponent} />
            <div className="content">
            {showCmponent ? <AddTask listTask={listTask} setlistTask={setlistTask} /> : <SeeTask listTask={listTask} />}
            </div>
        </div>
    );
}

export default Home;

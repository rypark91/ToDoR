

import classes from "./Title.module.css";

const Title = (props) => {;

    const createItemHandler = (event) => {
        event.preventDefault();
        props.onToggleMenu();
    };

    return (
        <div className={`${classes.titleLine} ${props.clickableClass}`}>
            <h1>To Do (React edition)
                <button onClick={createItemHandler}>+ Create</button></h1>
            <p>(By Ryan Park &copy; 2023)</p>
        </div>
    );
}

export default Title;
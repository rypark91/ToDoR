import { Fragment, useState } from "react";


import classes from './WriteMenu.module.css';

const WriteMenu = (props) => {

    const [enteredMessage, setEnteredMessage] = useState('');

   
    const messageChangeHandler = (event) => {
        if(event.target.key === 'Enter'){
            console.log("Key entered")
        }
        setEnteredMessage(event.target.value);
    };

    let disabled = !(enteredMessage.length > 0);
    let op = 0.5;
    if(!disabled){
        op = 1;

    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        
        const itemData = {

            message: enteredMessage
        };
        props.onCreateItem(itemData);

        setEnteredMessage('');
    }
    const closeHandler = (event) => {
        event.preventDefault();
        props.onClose();
    } 
    return (
    <div className={classes.modal}>
        <form onSubmit={submitHandler} className={classes.content}>
            <h3>Create To Do Item</h3>

            <label>Item</label><br/>
            <textarea rows='4'
            value={enteredMessage} 
            maxLength='50'
            onChange={messageChangeHandler}
            onKeyPress={e => {
                if(e.key === 'Enter')
                    e.preventDefault()
            }
                
            }></textarea>

            <button type="submit" disabled={disabled} style={{opacity: op}}>Submit</button>
            <button onClick={closeHandler}>Close</button>
        </form>
    </div>
    );
};

//sources:
//https://stackoverflow.com/questions/60008415/react-js-prevent-line-breaks-or-submit-on-enter-in-the-text-area



export default WriteMenu;
import React, { useState } from 'react';

import ChoiceMenu from "./ChoiceMenu";
import classes from "./Item.module.css";
import "./Item.module.css"

const Item = (props) => {
    const [check, setCheck] = useState("none");
    
    const deleteItemHandler = () => {
        props.onRemoveItem(props.iden);
    };
    const toggleEditHandler = () => {
        props.onEditToggle(props.iden);
    };
    
    const toggleCheckHandler = () => {
        
        if(check === "none"){
            setCheck("line-through");
        }
        else{
            setCheck("none");
        }

    }
    return (
        <div className={classes.itemContainer}>
            
            <div className={`${classes.item}`}>
                <input
                    type='checkbox'
                    onChange={toggleCheckHandler}/>
                <p style={{textDecoration: check}}>{props.message}</p>
                
            </div>
            <ChoiceMenu onDeleteItem={deleteItemHandler} 
                        onEditToggle={toggleEditHandler}
                        />
           
        </div>
        
    );
}

export default Item;
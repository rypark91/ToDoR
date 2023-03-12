import React, { useState } from 'react';

import Title from './components/ItemCollection/Title';
import ItemGrid from './components/ItemCollection/ItemGrid';
import WriteMenu from './components/UI/WriteMenu';
import EditMenu from './components/UI/EditMenu';
import './App.css';

/**
 * TO DO (Ironic)
 * 1. Redesign Note
 * >--put delete and edit to the right instead of on top
 * --add check marks and functionality
 * >--change height of notes
 * >2. Make note container smaller
 * >3. Make webpage look nicer
 * >--get rid of vertical padding
 * >4. make everything untouchable until submit or close
 * 
 */

function App() {

  const [itemCollection, setItemCollection] = useState([]);
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editIdNum, setEditIdNum] = useState('');
  const [activeClick, setClickable] = useState('');

   
  

  


  const createHandlerItem = (enteredItemData) => {
    let newList = [{ message: enteredItemData.message,
      id: Math.random().toString()}, ...itemCollection]
    setItemCollection(newList);
    setVisibleMenu(false);
    setClickable('');
 
  };
  const removeItemHander = (id) => {
    var result = itemCollection.filter(rItem => {
      return rItem.id !== id;
    });
    setItemCollection(result);
  }
  const editItemHandler = (editItem) => {
    
    var result = itemCollection.findIndex(rItem => rItem.id === editIdNum);
    
    let newArray = itemCollection;
    
    newArray[result].message = editItem.message; 
    setVisibleEdit(false);
    setItemCollection(newArray);
;
  }
  const toggleMenuHandler = () => {
    setClickable('disableClick');
    setVisibleMenu(true);
  }
  const toggleEditHandler = (id) => {
    setEditIdNum(id);
    setVisibleEdit(true);
    
  }

  const closeHandler = () => {
    setVisibleEdit(false);
    setVisibleMenu(false);
    setClickable('');
  }
 
  return (
    <div className="App">
      <Title 
      clickableClass={activeClick}
      onToggleMenu={toggleMenuHandler}/>
      { visibleMenu && <WriteMenu onCreateItem={createHandlerItem} onClose={closeHandler}/>}
      { visibleEdit && <EditMenu onEditItem={editItemHandler} onClose={closeHandler}/>}
      <ItemGrid
      items={itemCollection}
      editToggled={visibleEdit}
      clickableClass={activeClick}
      onRemove={removeItemHander} 
      onEditToggle={toggleEditHandler}/>
      
    </div>
  );
}

export default App;




  //sources:
  //https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples
  //online classes

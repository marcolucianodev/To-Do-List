import React from "react";

const ListItem = ({list, deleteTask}) => {


  return (
    <>
      <input type="checkbox" name="checked" id="checked" />
      <label>{list.task}</label>
      <button onClick={() => deleteTask(list.id)}>X</button>
    </>
  )
};

export default ListItem;
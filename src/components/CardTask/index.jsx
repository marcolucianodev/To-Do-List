import { useState } from "react";


const CardTask = ({deletecard}) => {

  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const addNewItem = () => {
    setList([...list, newItem]);
    setNewItem("");
  }

  const deleteItem = (index) => {
    const tempArr = [...list];
    tempArr.splice(index, 1)

    setList(tempArr);
  }

  return (
    <>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button  onClick={() => addNewItem()}>+ Add</button>
      
      {/* trabalando botao DELETAR CARD */}

      <button onClick={deletecard}>Botao deletar</button>
      
      {/* FIM */}


      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteItem(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CardTask;
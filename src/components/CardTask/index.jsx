import { useState } from "react";
import { Button, FormContainer, InputText } from "../../pages/styles";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { ListContent, ListItems } from "./styles";
import deleteIcon from "../../assets/images/trash-icon.png"


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
    <FormContainer>
      <InputText
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Adicione sub-itens á sua lista"
      />
      <Button 
        onClick={() => addNewItem()}
        bradiusrigth
        bgButton="#E2E8E9"
      >
        <AddIcon />
      </Button>
    </FormContainer>
      {/* <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button  onClick={() => addNewItem()}>+ Add</button> */}
      
      {/* trabalando botao DELETAR CARD */}

      {/* <button onClick={deletecard}>Botao deletar</button> */}
      
      {/* FIM */}


      <ListContent>
        {list.map((item, index) => (
          <ListItems key={index}>
            {item}
            {/* <button onClick={() => deleteItem(index)}>X</button> */}
            <Button 
              onClick={() => deleteItem(index)}
              bgButton="transparent"
            >
              {/* <DeleteIcon className="delete-icon"/> */}
              <img src={deleteIcon} alt="Delete" />
            </Button>
          </ListItems>
        ))}
      </ListContent>
    </>
  )
}

export default CardTask;
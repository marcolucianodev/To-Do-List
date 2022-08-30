import { useState } from "react";
import { 
  Button, 
  FormContainer, 
  InputText 
} from "../../pages/styles";
import AddIcon from '@mui/icons-material/Add';
import { 
  ListContent, 
  ListItems 
} from "./styles";
import deleteIcon from "../../assets/images/trash-icon.png"
import EditItems from "../EditItems";


const CardTask = () => {

  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  // Abrir box editar items
  const [openEditModal, setOpenEditModal] = useState(false);

  const handleClose = () => {
    setOpenEditModal(!openEditModal)
  }

  const editList = (index, newText) => {
    // console.log(index)
    // console.log(list[index])
  }

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

    {/* Componente que edita as tarefas */}
    {/* <EditItems open={openEditModal} /> */}

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

      <ListContent>
        {list.map((item, index) => (
          <ListItems key={index} >

            {/* Componente que edita as tarefas */}
            {openEditModal &&
              <EditItems close={handleClose} list={item} />
            }

            {console.log(list)}

            <p onClick={() => setOpenEditModal(true)}>{item}</p>
            <Button 
              onClick={() => deleteItem(index)}
              bgButton="transparent"
            >
              <img src={deleteIcon} alt="Delete" />                       
            </Button>
          </ListItems>
        ))}
      </ListContent>
    </>
  )
}

export default CardTask;
import { useState } from "react"
import { Container, EditContainer } from "./styles"

const EditItems = ({close, list, editList}) => {

  // const handleClose = () => {
  //   alert('FECHOU MODAL')
  // }

  const [editItem, setEditItem] = useState(list)

  // const editListItem = () => {
  //   editList(list[index], editItem)
  // }

  return (
    <Container>
      <EditContainer>
        <h2>Editar Item</h2>
        <input type="text" defaultValue={list} onChange={(e) => setEditItem(e.target.value)} placeholder="" />
        <button onClick={close}>Cancelar</button>
        <button>OK</button>
      </EditContainer>
    </Container>
  )
}

export default EditItems;
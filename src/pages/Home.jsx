import { useState } from "react";
import CardTask from "../components/CardTask";

const Home = () => {

  // const [list, setList] = useState([]);
  // const [newItem, setNewItem] = useState("");

  const [card, setCard] = useState([]);
  const [newCard, setNewCard] = useState("");

  // const addNewItem = () => {
  //   setList([...list, newItem]);
  //   setNewItem("");
  // }

  const addNewCard = () => {
    setCard([...card, newCard]);
    setNewCard("");
  }

  // const deleteItem = (index) => {
  //   const tempArr = [...list];
  //   tempArr.splice(index, 1)

  //   setList(tempArr);
  // }

  const deleteCard = (index) => {
    const tempCard = [...card]
    tempCard.splice(index, 1)

    setCard(tempCard)
    console.log('DELETE CARD')
    console.log(index)

  }

  return (
    <>
    <input type="text" value={newCard} onChange={(e) => setNewCard(e.target.value)} />
    <button  onClick={() => addNewCard()}>Add</button>
      <ul>
        {card.map((card, index) => (
          <li key={index}>
            <label>{card}</label>
            <CardTask deletecard={() => deleteCard(index)} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home;
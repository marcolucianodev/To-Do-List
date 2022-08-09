import { useState } from "react";
import CardTask from "../components/CardTask";
import { 
  Button,
  CardContent,
  CardHead, 
  CardItems, 
  MainContent, 
  FormContainer, 
  InputText, 
  Container 
} from "./styles";
import AddIcon from '@mui/icons-material/Add';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Header from "../components/Header";
import Footer from "../components/Footer";
import deleteIcon from "../assets/images/trash-icon.png"

const Home = () => {

  const [card, setCard] = useState([]);
  const [newCard, setNewCard] = useState("");

  const addNewCard = () => {
    setCard([...card, newCard]);
    setNewCard("");
  }

  const deleteCard = (index) => {
    const tempCard = [...card]
    tempCard.splice(index, 1)

    setCard(tempCard)
  }

  return (
    <Container>
      <Header />
      <MainContent>
      
        <FormContainer>
          <InputText 
            type="text" 
            value={newCard} 
            onChange={(e) => setNewCard(e.target.value)}
            placeholder="Qual lista você deseja criar?"
          />
          <Button 
            onClick={() => addNewCard()}
            bradiusrigth
            bgButton="#E2E8E9"
          >
            <AddIcon />
          </Button>
        </FormContainer>
        
        <CardContent>
          {card.map((card, index) => (
            <CardItems key={index}>
              <CardHead>
                <div className="left">
                  <span><DragIndicatorIcon className="drag-icon" /></span>
                  <label>{card}</label>
                </div>
                <Button 
                  onClick={() => deleteCard(index)}
                  bgButton="transparent"
                >
                  <img src={deleteIcon} alt="Delete" />
                </Button>
              </CardHead>
              <CardTask />
            </CardItems>
          ))}
        </CardContent>
        
      </MainContent>
      <Footer />
    </Container>
  )
}

export default Home;
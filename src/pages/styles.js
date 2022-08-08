import styled from "styled-components";

export const Container = styled.div`
  max-width: 428px;
  min-height: 100vh;

  @media (min-width: 450px) {
    width: 428px;
  }

`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #FFFFFF;
  max-height: 926px;
  overflow: auto;
`;

export const FormContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
`;

export const InputText = styled.input`
  width: 100%;
  padding: 15px;
  border: none;
  outline: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #E2E8E9;
`;

export const Button = styled.button`
  border: none;
  background-color: ${props => props.bgButton};
  border-top-right-radius: ${props => props.bradiusrigth ? "5px" : "none"};
  border-bottom-right-radius: ${props => props.bradiusrigth ? "5px" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  .delete-icon {
    font-size: 20px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
`;

export const CardHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  .left {
    display: flex;
    align-items: center;
    gap: 20px;

    label {
      font-weight: 700;
    }
  }
`;

export const CardItems = styled.div`
  background-color: #FFFFFF;
  margin-bottom: 20px;
  border: 1px solid #E2E8E9;
  border-radius: 5px;

`;
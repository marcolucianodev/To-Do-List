import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Table from './components/Table';

let valorInicial = [
  {
    id: '1',
    nome: 'Marco',
    sobrenome: 'Aurélio'
  },
  {
    id: '2',
    nome: 'José',
    sobrenome: 'Da Silva'
  }
]

const App = () => {
  
  const [dados, setDados] = useState(valorInicial);
  
  const addDados = (e) => {
    e.preventDefault();

    const newDados = {
      id: document.querySelector("#id").value,
      nome: document.querySelector("#nome").value,
      sobrenome: document.querySelector("#sobrenome").value
    };

    // {/*FORMA DE FAZER COM PUSH*/}
      dados.push(newDados);
      console.log(dados)
      setDados([...dados])
    // {/*FIM*/}

    // {/*FORMA DE FAZER SEM O PUSH (MAIS INOVADORA)*/}
    // setDados([...dados, {...newDados}]);
    // console.log([...dados, {...newDados}])
    // {/*FIM*/}
  }

  const deleteActivity = (id) => {
    const atividadesFiltradas = dados.filter(newDados => newDados.id !== id);
    setDados([...atividadesFiltradas]);
  }
  
  return (
    <>
      <Form 
        dados={dados}
        addDados={addDados}
      />
      <Table 
        dados={dados}
        deleteActivity={deleteActivity}
      />
    </>
  );
}

export default App;
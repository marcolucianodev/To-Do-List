import { useState } from "react";

const Form = ({handleTaskAdd}) => {

  const [task, setTask] = useState(null);
  const [id, setId] = useState(0);

  const handleTask = (e) => {
    setTask(e.target.value)
  }

  const listCreate = (task) => {
    const listObj = {
      task: task,
      id: id
    }

    setId(id + 1)
    handleTaskAdd(listObj)

    //Mudar para react DOM abaixo = B7 Web TEM EPXLICANDO
    document.getElementById('task').value = '';
  }


  // const handleTaskAdd = (e) => {
  //   e.preventDefault()
  //   console.log(task)
  // }

  return (
    <>
      <form style={{width:"300px", margin:"0 auto", marginBottom:"30px", marginTop:"30px"}}>
        <input 
          type="text" 
          id="task" 
          placeholder="Aicionar Tarefa"
          onChange={handleTask}
        /><br/>
        {/* <div onClick={() => handleTaskAdd(task)}>+Adicionar</div> */}
        <input type="button" value="+ ADD" onClick={() => listCreate(task)} />
      </form>
    </>
  )
};

export default Form;
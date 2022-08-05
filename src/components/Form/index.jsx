const Form = ({dados, addDados}) => {
  return (
    <>
      <form style={{width:"300px", margin:"0 auto", marginBottom:"30px", marginTop:"30px"}}>
        <input type="text" id="id" placeholder="ID" value={Math.max.apply(Math, dados.map(item => item.id)) + 1} readOnly /><br/>
        <input type="text" id="nome" placeholder="Nome"/><br/>
        <input type="text" id="sobrenome" placeholder="Sobrenome"/><br/>
        <button onClick={addDados}>+Adicionar</button>
      </form>
    </>
  )
};

export default Form;
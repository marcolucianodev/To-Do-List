import React from "react";

const Table = ({dados, deleteActivity}) => {
  return (
    <>
      <table style={{width:"400px", margin:"0 auto"}}>
        <thead>
         <tr>
           <th>ID</th>
           <th>Nome</th>
           <th>Sobrenome</th>
         </tr>
        </thead>
        <tbody className="table-data">
          {/*Tabela dinamica aqui*/}
          {dados.map((item, index)=> {
            return (
              <tr key={index} id={`table-row${index + 1}`}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.sobrenome}</td>
                <td className="options-line">
                  <button className='update' style={{backgroundColor:"blue", color:"#FFF", cursor:"pointer", marginRight:"10px"}}>E</button>
                  <button className='delete' style={{backgroundColor:"red", color:"#FFF", cursor:"pointer"}} onClick={() => deleteActivity(item.id)}>X</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
};

export default Table;
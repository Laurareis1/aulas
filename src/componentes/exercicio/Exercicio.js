import {useRef, useState } from "react";


function Exercicio() {

  const input = useRef();
  const [tasks, setTasks] = useState([]);

  function add(){
   const newTasks = input.current.value
   tasks.push(newTasks);
   setTasks([...tasks]);
   input.current.value ='';
  }
  const removeFromList = i => {
    tasks.splice(i, 1);
    console.log(tasks);
    const newtasks1 = [...tasks];
    setTasks(newtasks1);
}

    return <>
        <h1>entre com os elementos da lista</h1>
          <input ref={input} type="text"placeholder="Write task" />
          <button onClick={add}>ADD</button>
          
          <ul>
             {tasks.map((task,i)=> 
              <li key={i}>{task} <button onClick={(e)=>removeFromList(i)}>Eliminar</button></li>
            )}
          </ul>
          </>   
}
export default Exercicio

import { useRef, useState } from "react";
import './search.css';

function Serch(){
    const input = useRef();
    const serch = useRef();
    const[texto, setTexto]=useState([]);
    const [Pesquisado, setPesquisado] = useState ([]);

    function adicionar(){
        const newText=input.current.value;
        texto.push(newText);
        setTexto([...texto]);
        input.current.value='';
    }
    function search() {b n
        let resultado = [];
        const searchValue = serch.current.value;
        
        for (let item of texto) {
            if(item.toLowerCase().includes(searchValue.toLowerCase())) {
                resultado.push(item);
            }
        }
        setPesquisado(resultado)
        
        if(searchValue == ""){
            setPesquisado([])
        }
    }
    return<>
<div className="conteiner">
    <div className="adicionar">
<input ref={input}type="text" ></input>
    <button onClick={adicionar}>Add</button>
    <ul>
    {texto.map((item, i)=>
        <li  key={i}>{item}</li>
        )}
    </ul>
    </div>
    <div className="pesquisar">
        <label>search</label>
    <input  type="text" ref={serch} onChange={search}></input>
    <ul>
    {Pesquisado.map((item, i)=>
        <li  key={i}>{item}</li>
        )}
    </ul>
    </div>

</div>


    
    </>
}
export default Serch;
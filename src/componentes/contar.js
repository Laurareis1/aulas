import { useRef, useState } from "react";

function Contar(){
    const input = useRef();
    const ext = useRef();
    const [text, setText]=useState('');
    const [tamanho, setTamanho]=useState('');
    const [tamanho1, setTamanho1]=useState('');

 
    function contarCaratres(){
        setText(input.current.value.length)
        setTamanho((input.current.value).split(' '))
        setTamanho1(tamanho.length)
       
    }
    function cout(){
        const t= ext.current.value;
        

        
    }
    return<>
     <label>texto </label>
     <input ref={input} type="text"onChange={contarCaratres}  /><br/>
     <label>numero de cataretres : </label>
     <span>{text}</span><br/>
     <label>numero de palavras : </label>
     <span>{tamanho1}</span><br/>
     <label>palavra </label>
     <input ref={ext} type="text"/><br/>
     <button onClick={cout}>count</button>
     <span>{}</span><br/>
   
    </>

}
export default Contar;
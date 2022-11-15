import { useRef, useState } from "react";

function Hello(props){

    const input = useRef();
    const [text, setText] = useState([]);
    function add(){
        const userText=input.current.value
        setText(userText)
    }
    return <>

        <div className="hello">
           <h4>{props.text}</h4>
        </div>
        <div>

        <input ref={input} type="text"placeholder="Write task" />
          <button onClick={add}>ADD</button>
          <b>{text}</b>
        </div>
        </>
}
export default Hello
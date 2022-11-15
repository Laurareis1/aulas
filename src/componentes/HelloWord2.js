import { useRef, useState } from "react";

function Hello2(props){

    const input = useRef();
   const [text, setText] = useState([]);
    return <>
        <div>
        <input ref={input} type="text"placeholder="Write task" onChange={(e)=>setText(e.target.value)} />
         
          <b>{text}</b>
        </div>
        </>
}
export default Hello2
import { useState } from "react";

function Count() {


    const [count, setCount] = useState(0)


    return (

        <div>
            <span>Nº de cliques: {count}</span>
            <button onClick={()=>setCount(count + 1)}>Count</button>
        </div>
    )
}
export default Count

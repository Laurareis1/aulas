import { useEffect, useState } from "react";

function ContarSegundos(){
  const [time, setTime] = useState('');

    useEffect(()=>{

        const intv = setInterval(()=>{
            const time = (new Date()).toLocaleTimeString();
            console.log(time);
            setTime(time);
        }, 1000);

        return ()=> clearInterval(intv);

    }, []);

    return <h4>{time}</h4>

}
export default ContarSegundos;
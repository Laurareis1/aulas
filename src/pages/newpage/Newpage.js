import Hello from "../../componentes/hello/hello";
import Hello2 from "../../componentes/HelloWord2";
import Login from "../../componentes/Login";
import Pag3 from "../../componentes/pag3";
import Pagination2 from "../../componentes/paginacao";


function Newpage (){
    return <>
        <h1>new page</h1>
        <Hello text="sextou"/>
        <Hello2/>
        <Pagination2/>
        <Pag3/>
        <Login/>
    </>
}
export  default Newpage;
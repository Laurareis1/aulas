import { useState } from "react";
import ContarSegundos from "../componentes/clock";
import Contar from "../componentes/contar";
import Table from "../componentes/table/Table";



function TablePage() {

    const [listOfPersons, setListOfPersons] = useState([
        {
            "firstName": "Bruno",
            "lastName": "Cardoso",
            "gender": "Male",
        },
        {
            "firstName": "Joana",
            "lastName": "Fernandes",
            "gender": "Female",
        },
        {
            "firstName": "Pedro",
            "lastName": "Garcia",
            "gender": "Male",
        },
        {
            "firstName": "Ilda",
            "lastName": "Barbosa",
            "gender": "Fenale",
        },
        {
            "firstName": "Mira",
            "lastName": "Sanches",
            "gender": "Female",
        }
    ]);

    function remove(pos) {
        listOfPersons.splice(pos,1);
        setListOfPersons([...listOfPersons]);
    }

    return <>
        <h1>My table page</h1>
        <Contar/>
        <ContarSegundos/>

        <Table list={listOfPersons} rm={remove}/>

    </>
}

export default TablePage;
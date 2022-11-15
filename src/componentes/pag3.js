import { useState } from "react";
import './pag3.css';


function Pag3 (){
 const list = [{
    name:'suzana',
    age: 44,
    bio:'likes to go to the beach',
    email:'suzy@gmail.com'
 },
 {
    name:'luiz',
    age: 15,
    bio:'likes to go to the beach',
    email:'luiz@gmail.com' 
 },
 {
    name:'vanusa',
    age: 80,
    bio:'likes to go to the beach',
    email:'vanusa@gmail.com'
 },
 {
    name:'carmem',
    age: 44,
    bio:'likes to go to the beach',
    email:'carmem@gmail.com'
 }];
 let [pos, setPos] = useState(0);
function next (){
   if(pos < list.length-1){
      setPos (pos+1);
  } else {
      alert('Highest Limit reached!');
  }  
}
function previous (){
   if(pos > 0){
      setPos (pos-1);
  } else {
      alert('Highest Limit reached!');
  }  
}


 return<>
 <div className="top-menu">


 {list.map((item, i) =>     
          <div key={i}>{item.name}</div>)}
   </div> 

   <div className="meio">

   <button onClick={previous}>Previous</button>
  <div>
    Name: {list[pos].name} <br />
    Age: {list[pos].age} <br />
    Bio: {list[pos].bio} <br />
  </div>
  <button onClick={next}>Next</button>

  </div>

        </>
}
export default Pag3;
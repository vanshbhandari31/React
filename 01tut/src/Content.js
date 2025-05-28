import './index.css';
import { useState}  from "react";

const Content=()=>{
    const [name,setName]=useState('Vansh');
    const [count,setCount]=useState(0);
    //USE OF CONST IS PREFERRED SO THAT THE STATE IS NOT CHANGED DIRECTLY WHENEVER USED.


    const handleNameChange=()=>{
        const names=["Airtel","Airtel works","Broadbrand","Black"]
        const int=Math.floor(Math.random()*4)
        return setName(names[int]);
    }
    const handleChange2=()=>{
        setCount(count+1);

        console.log(count);
    }
    const handleChange3=( name )=>{
        console.log(`${name} was clicked`);
    }
    const handleChange4=(e)=>{
        console.log(e);
    }
    return(
        <main className="Content">
            <p onDoubleClick={handleChange2}>
                Hello {name}!
            </p>
            <button onClick={handleChange2}>Click it</button>
            <button onClick={()=>handleChange3(handleNameChange())}>Change Name</button>
            <button onClick={(e)=>handleChange4(e)}>Click it</button>
        </main>
    )
}
export default Content;

import './index.css';
const Content=()=>{

    const handleNameChange=()=>{
        const names=["Airtel","Airtel works","Broadbrand","Black"]
        const int=Math.floor(Math.random()*4)
        return names[int]
    }
    const handleChange2=()=>{
        console.log("button was clicked");
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
                Hello {handleNameChange()}!
            </p>
            <button onClick={handleChange2}>Click it</button>
            <button onClick={()=>handleChange3(handleNameChange())}>Click it</button>
            <button onClick={(e)=>handleChange4(e)}>Click it</button>
        </main>
    )
}
export default Content;

const Content=()=>{
    const handleNameChange=()=>{
        const names=["Vansh","Bhandari","Rahul","Samajpati"]
        const int=Math.floor(Math.random()*4)
        return names[int]
    }
    return(
        <main>
            <p>
                Hello {handleNameChange()}!
            </p>
        </main>
    )
}
export default Content;

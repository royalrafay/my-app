 const Frag=()=>{
    const over =()=>{
        console.log('mouse over event fire');
    }
    return(
        <div>
        <h1>This is Fragment component</h1>
        <p onMouseOver={over}>this is paragraph</p>
        </div>
    )
}
export default Frag
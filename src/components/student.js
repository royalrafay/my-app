function Student(props) {
    return (<div>
        <h1>hello {props.name} </h1>
        <h2>address : {props.address}</h2>
        <h4>email :{props.other.email}</h4>
        <h4>mobile :{props.other.mobile}</h4>
    </div>
    )
}
export default Student
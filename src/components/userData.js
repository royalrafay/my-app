import { Table } from "react-bootstrap"

function UserData({ data, heading,color }) {

    return (<div>
            <h1 style={{color:color}}> {heading}</h1>
            <Table  bordered  style={{color:color}}>

                <thead>

                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Location</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => {

                        return (<tr>
                            <td>{index + 1}</td>
                            <td>{value.firstName}</td>
                            <td>{value.lastName}</td>
                            <td>{value.location}</td>
                            <td>{value.age}</td>
                        </tr>)

                    })}

                </tbody>
            </Table>
        </div>)
                
            }
export default UserData
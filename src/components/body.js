import UserData from "./userData";
import Student from "./student";
import  Frag  from "./fragment";
export function Body() {
    const registerData = [
        { firstName: "junaid", lastName: "khan", location: "mumbai", age: 26 },
        { firstName: "umed", lastName: "uddin", location: "mumbai", age: 28 },
        { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
        { firstName: "khizer", lastName: "mohammad", location: "hyderabad", age: 35 },
        { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
        { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
        { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
        { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
        { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
        { firstName: "inayat", lastName: "khan", location: "hyderabad", age: 24 },
        { firstName: "aamer", lastName: "khan", location: "chennai", age: 30 },
        { firstName: "khizer", lastName: "mohammad", location: "hyderabad", age: 35 },
        { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
        { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
        { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
        { firstName: "sohail", lastName: "qazi", location: "hyderabad", age: 32 },
        { firstName: "mubeen", lastName: "uddin", location: "hyderabad", age: 36 },
        
      ];
      const unregisterData = [
        { firstName: "zaid", lastName: "khan", location: "mumbai", age: 26 },
        { firstName: "khaled", lastName: "uddin", location: "mumbai", age: 28 },
        { firstName: "mubeen", lastName: "khan", location: "chennai", age: 30 },
        { firstName: "salman", lastName: "mohammad", location: "hyderabad", age: 35 },
        { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
        { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
        { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
        { firstName: "tabrez", lastName: "qazi", location: "hyderabad", age: 32 },
        { firstName: "riyaz", lastName: "uddin", location: "hyderabad", age: 36 },
        { firstName: "khaja", lastName: "khan", location: "hyderabad", age: 24 },
        { firstName: "zaid", lastName: "khan", location: "mumbai", age: 26 },
        { firstName: "khaled", lastName: "uddin", location: "mumbai", age: 28 },
        { firstName: "mubeen", lastName: "khan", location: "chennai", age: 30 },
        { firstName: "salman", lastName: "mohammad", location: "hyderabad", age: 35 },
        { firstName: "uzer", lastName: "uddin", location: "kolkata", age: 18 },
        { firstName: "hanzala", lastName: "shaikh", location: "pune", age: 25 },
        { firstName: "faheen", lastName: "khan", location: "chennai", age: 28 },
        { firstName: "tabrez", lastName: "qazi", location: "hyderabad", age: 32 },
        
      ];
    return <div className="body">
        <div className="body1">
            <Student name={"anil"} address={"delhi"} other={{ email: "anil@test.com", mobile: "000" }} />
            <Student name={"saarosh"} address={"mumbai"} other={{ email: "sarosh@test.com", mobile: "111" }} />
            <Student name={"faizan"} address={"ned"} other={{ email: "faizan@test.com", mobile: "222" }} />
        </div>
        <div className="body2">
            <UserData data={registerData} heading="Register Data" color="red"/>  
            <UserData data={unregisterData} heading="Unregister Data" color="yellow"/>
        </div>
        <div>
            <Frag/>
        </div>
    </div>
}
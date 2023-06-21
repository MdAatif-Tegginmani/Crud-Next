
import AddUserForm from "./addUserForm";
import UpdateUserForm from "./updateUserfForm";
 
// import Success from "./success"

const flag = true 

export default function Form(){
return(
  <div className="container mx-auto py-5">
    {flag ? <AddUserForm/> :<UpdateUserForm/>}
  </div>


)
    
    
}
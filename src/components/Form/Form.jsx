import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({login}) =>{
   
   const [errors, setErrors] = useState({});
   const [userData, setUserData] = useState({ 
      email: '', 
      password: '' 
   });

   const handleChange = (event) =>{
      setUserData({
         ...userData,
         [event.target.name]: event.target.value
      })

      setErrors(validation({
         ...userData,
         [event.target.name]: event.target.name
   }))
   }

   const handleSubmit = (event) =>{
      event.preventDefault();
      login(userData);
   }

    return (

         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="email">email</label>
               <input type="email" name="email" value={userData.email} onChange={handleChange}/>
               {errors.email && <p>{errors.email}</p>}
            </div>
               

            <div>
               <label htmlFor="password">password</label>
               <input type="password" name="password" value={userData.password} onChange={handleChange} />
               {errors.password && <p>{errors.password}</p>}
            </div>
               <button>submit</button>
         </form>
    )
}

export default Form;
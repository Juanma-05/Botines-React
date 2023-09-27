import './sesion.css';
import { Link } from "react-router-dom";

export default function Register() {
  return(
      <div className="register">
        <h2>REGISTER</h2>
        <label For="user">User Name</label>
        <input type="text" name="user" required/>

        <label For="email">User Email</label>
        <input type="text" name="useremail" required/>

        <label For="password">Password</label>
        <input type="password" name="pass" required/>

        <label For="confirpassword">Confirm Password</label>
        <input type="password" name="pass" required/>

        <Link to="/sesion">
        <input type="submit" className="btn-register" value="Register" required/>
        </Link>



    </div>

    
)};
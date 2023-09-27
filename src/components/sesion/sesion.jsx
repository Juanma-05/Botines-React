import './sesion.css';
import { Link } from "react-router-dom";

export default function LoginForm() {
  return(
      <div className="loginForm">
        <h2>LOGIN</h2>
        <input type="text" name="user" placeholder="User " required/>
        <input type="password" name="pass" placeholder="Password" required/>
        <Link to="/">
        <input type="submit" className="btn-login" value="Login " required/>
        </Link>
    
        <Link to="/register">
        <button className='btn-register'>Register</button>
        </Link>



    </div>

    
)};

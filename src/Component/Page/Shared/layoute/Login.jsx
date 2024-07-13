import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../../Firebase/AuthProvider";

const Login = () => {
    const {LoginUser} =useContext(AuthContext);
    const handleLogin = e =>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
        // signIn firebase user 
        LoginUser(email,password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
        })
        .catch(error =>{
            console.error(error)
        })
    } 
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className="text-2xl my-10 text-center">Please login</h2>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1\2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">Don't have an account? Please<Link to='/register'>
        <span className="btn btn-link">Register</span>
        </Link></p>
      </div>
    </div>
  );
};

export default Login;

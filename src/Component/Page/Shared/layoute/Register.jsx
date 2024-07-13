import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../../../Firebase/AuthProvider";

const Register = () => {
 const {createUser}=useContext(AuthContext)
    
 

    const handleRegister = e =>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const photo=form.get('Photo Url');
        const name=form.get('name');
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password,name,photo);
        // create user in firebase 
        createUser(email,password)
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
          <h2 className="text-2xl my-10 text-center">Please Register</h2>
          <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1\2 mx-auto">
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="photo"
                name="Photo Url"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center">New Here?Please<Link to='/login'>
          <span className="btn btn-link">Login</span>
          </Link></p>
        </div>
      </div>
    );
};

export default Register;
// import { Link } from "react-router-dom";
// import loginImage from '../../assets/authentication.gif'

import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1 className="text-5xl text-center mt-5 font-bold mb-4 text-blue-600">Login now!</h1>
            <div className="hero bg-blue-50">

                <div className="hero-content flex-col lg:flex-row-reverse ">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    {/* {...register("email", { required: true })} */}
                                    <input type="email" placeholder="email" className="input input-bordered" />
                                    {/* {errors.email && <span className="text-red-600">Email is required</span>} */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="password" placeholder="password" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="hover:bg-blue-700  font-bold py-2 px-4 rounded bg-blue-600 text-white">Login</button>
                                </div>

                                <p className="mt-6">Are you new in our site?Do <Link to='/registration' className='text-blue-600 font-bold '>Registration</Link></p>
                            </form>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Login;
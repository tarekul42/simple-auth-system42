import React, { use } from "react";
import useAuth from "../../Hooks/UseAuth";

const SignUp = () => {
  const {createUser} = useAuth();

    const handleSignUp = e =>{
        e.preventDefault();

        const inputField = e.target;
        const name = inputField.name.value;
        const email = inputField.email.value;
        const password = inputField.password.value;
        const confirmPassword = inputField.confirmPassword.value;

        console.log(name, email, password, confirmPassword)

        createUser(email, confirmPassword).then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode, errorMessage)
        });
    }

  return (
    <>
      <div className="bg-base-200">
        <div className="min-h-screen flex items-center justify-center">
          <div className="hero">
            <div className="hero-content flex flex-col">
              <h1 className="text-3xl font-bold">Register now!</h1>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleSignUp}>
                    <fieldset className="fieldset">
                      {/* <label className="fieldset-label">Name</label> */}
                      <input
                        type="name"
                        name="name"
                        className="input"
                        placeholder="Enter your name here"
                      />
                      {/* <label className="fieldset-label">Email</label> */}
                      <input
                        type="email"
                        name="email"
                        className="input my-4"
                        placeholder="Enter your email here"
                      />
                      {/* <label className="fieldset-label">Password</label> */}
                      <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Make a strong password"
                      />
                      {/* <label className="fieldset-label">Confirm Password</label> */}
                      <input
                        type="password"
                        name="confirmPassword"
                        className="input mt-4"
                        placeholder="Re-type your password"
                      />
                      <input
                        className="btn btn-neutral mt-4"
                        type="submit"
                        value="Register"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

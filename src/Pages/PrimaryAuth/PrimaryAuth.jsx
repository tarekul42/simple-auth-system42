import React from "react";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin/GithubLogin";

const PrimaryAuth = () => {
    
  const handleEmailChecking = (e) => {
    e.preventDefault();
    // console.log("I've got clicked");

    const inputField = e.target;
    const email = inputField.email.value;
    console.log(email)
  };

  return (
    <>
      <div className="bg-base-200">
        <div className="min-h-screen flex items-center justify-center">
          <div className="hero">
            <div className="hero-content">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleEmailChecking}>
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Enter your email here"
                      />
                      <input
                        className="btn btn-neutral mt-4"
                        type="submit"
                        value="Check"
                      />
                    </fieldset>
                  </form>
                  <div className="divider">OR</div>
                  <div className="flex flex-col gap-4">
                    <GoogleLogin />
                    <GithubLogin />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrimaryAuth;

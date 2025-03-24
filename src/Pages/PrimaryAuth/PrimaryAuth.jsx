import React from "react";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin/GithubLogin";

const PrimaryAuth = () => {
  return (
    <>
      <div className="bg-base-200">
      <div className="min-h-screen flex items-center justify-center">
        <div className="hero">
          <div className="hero-content">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    className="input"
                    placeholder="Enter your email here"
                  />
                  <button className="btn btn-neutral mt-4">Check</button>
                </fieldset>
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

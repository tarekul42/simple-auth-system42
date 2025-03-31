import React, { useState } from "react";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import GithubLogin from "../../Components/GithubLogin/GithubLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router";

const PrimaryAuth = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const checkUserExists = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
    setLoading(true);
    setMessage("Checking....");
    try {
      const response = await axiosPublic.get(`/check-user?email=${email}`);
      console.log(response);
      if (response.data.exists) {
        setMessage("User found! Redirecting to login....");
        setTimeout(() => {
         navigate("/login");
        }, 1000);
      } else {
        setMessage("User not found! Redirecting to sign-up....");
        setTimeout(() => {
          navigate("/signup");
        }, 1000);
      }
    } catch (error) {
      setMessage("Error Checking user. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="bg-base-200">
        <div className="min-h-screen flex items-center justify-center">
          <div className="hero">
            <div className="hero-content">
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <div>
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {/* <input
                        className="btn btn-neutral mt-4"
                        type="submit"
                        value="Continue"
                      /> */}
                      <button
                        onClick={checkUserExists}
                        className="btn btn-neutral mt-4"
                        disabled={loading}
                      >
                        {loading ? "Checking...." : "Continue"}
                      </button>
                      <p>{message}</p>
                    </fieldset>
                  </div>
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

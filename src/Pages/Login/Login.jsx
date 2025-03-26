import useAuth from "../../Hooks/UseAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    const inputField = e.target;
    const email = inputField.email.value;
    const password = inputField.password.value;
    console.log(email, password);

    login(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };

  return (
    <>
      <div className="bg-base-200">
        <div className="min-h-screen flex items-center justify-center">
          <div className="hero">
            <div className="hero-content flex flex-col">
              <h1 className="text-3xl font-bold">Login now!</h1>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                      />
                      <label className="fieldset-label">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="input"
                        placeholder="Password"
                      />
                      <div>
                        <a className="link link-hover">Forgot password?</a>
                      </div>
                      <input
                        className="btn btn-neutral mt-4"
                        type="submit"
                        value="Login"
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

export default Login;

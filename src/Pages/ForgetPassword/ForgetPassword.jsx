import useAuth from "../../Hooks/UseAuth";

const ForgetPassword = () => {
    const {resetPasswordOnEmail} = useAuth();
    const storedEmail = localStorage.getItem("userEmail");

    const handleResetPassword = (e) =>{
        e.preventDefault();

        const inputField = e.target;
        const email = inputField.email.value;
        console.log(email)
        resetPasswordOnEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
            console.log("password reset email sent successfully")
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
              <h1 className="text-3xl font-bold">Forget Pasword!?</h1>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <form onSubmit={handleResetPassword}>
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="input"
                        placeholder="Email"
                        defaultValue={storedEmail}
                      />
                      <input
                        className="btn btn-neutral mt-4"
                        type="submit"
                        value="Reset password"
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

export default ForgetPassword;

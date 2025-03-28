import { sendEmailVerification } from "firebase/auth";
import useAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SignUp = () => {
  const { createUser, updateUserProfile } = useAuth();
  const storedEmail = localStorage.getItem("userEmail");
  const axiosPublic = useAxiosPublic();

  const handleSignUp = (e) => {
    e.preventDefault();

    // ✅ Access form fields correctly
    const form = e.target;
    const name = form.elements["name"].value; // Get name correctly
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const confirmPassword = form.elements["confirmPassword"].value;

    console.log(name, email, password, confirmPassword);

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const loggedUser = userCredential.user;
        // ...
        console.log("User Created:", loggedUser);

        // ✅ Send Email Verification
        sendEmailVerification(loggedUser)
          .then(() => {
            console.log("Verification email sent! ✅");
            alert(
              "A verification email has been sent. Please check your inbox."
            );
          })
          .catch((error) => {
            console.error("Error sending email verification:", error);
          });

        // ✅ Update User Profile (set displayName)
        updateUserProfile(loggedUser, { displayName: name })
          .then(() => {
            // Profile updated!
            // ...
            console.log("Profile updated successfully!");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            alert("Failed to update profile. Please try again later.");
          });

        // ✅ Prepare user object for backend
        const user = {
          uid: loggedUser?.uid,
          email: loggedUser?.email,
          emailVerified: loggedUser?.emailVerified,
          displayName: name,
          isAnonymous: loggedUser?.isAnonymous,
          photoURL: loggedUser?.photoURL,
          providerData: loggedUser?.providerData,
          createdAt: loggedUser?.metadata?.createdAt,
          lastLoginAt: loggedUser?.metadata?.lastLoginAt,
        };

        console.log(user);

        axiosPublic
          .post("/users", user)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            console.error("Error sending user to backend:", error);
          });
      })
      .catch((error) => {
        console.error("Error during sign-up:", error.code, error.message);
      });
  };

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
                        defaultValue={storedEmail}
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

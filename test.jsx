// const [email, setEmail] = useState("");
// const [loading, setLoading] = useState(false);
// const [message, setMessage] = useState("");

// // Debounce function to limit API calls
// useEffect(() => {
//   const timer = setTimeout(() => {
//     if (email) {
//       checkUserExists(email);
//     }
//   }, 500);

//   return () => clearTimeout(timer);
// }, [email]);

// const checkUserExists = async (email) => {
//   setLoading(true);
//   setMessage("Checking...");
//   try {
//     const response = await axios.get(`/api/check-user?email=${email}`);
//     if (response.data.exists) {
//       setMessage("User found! Redirecting to login...");
//       setTimeout(() => window.location.href = "/login", 1000);
//     } else {
//       setMessage("User not found! Redirecting to sign-up...");
//       setTimeout(() => window.location.href = "/signup", 1000);
//     }
//   } catch (error) {
//     setMessage("Error checking user. Please try again.");
//   }
//   setLoading(false);
// };
const [email, setEmail] = useState("");
const [loading, setLoading] = useState(false);
const [message, setMessage] = useState("");

// Debounce function to limit API calls
useEffect(() => {
  const timer = setTimeout(() => {
    if (email) {
      checkUserExists(email);
    }
  }, 500);
  return () => clearTimeout(timer);
}, [email]);

const checkUserExists = async (email) => {
  setLoading(true);
  setMessage("Checking....");
  try {
    const response = await axios.get(`/api/check-user?email=${email}`);
    if (response.data.exists) {
      setMessage("User found! Redirecting to sign-up....");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } else {
      setMessage("User not found! Redirecting to sign-up....");
      setTimeout(() => {
        window.location.href = "/signup";
      }, 1000);
    }
  } catch (error) {
    setMessage("Error Checking user. Please try again.");
  }
  setLoading(false);
};

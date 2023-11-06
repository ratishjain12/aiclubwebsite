import { useState, useEffect} from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("admin")) {
      router.push("/createletter");
    }
  }, []);

  const adminSignIn = (e: React.FormEvent<HTMLFormElement>): void => {
    const admin_username = process.env.ADMIN_USERNAME;
    const admin_password = process.env.ADMIN_PASSWORD;

    e.preventDefault();
    if (username === "" || password === "") {
      setError("Please fill in all the credentials");
      return;
    }

      if (String(username) === String(admin_username) && String(password) === String(admin_password)) {
        localStorage.setItem("admin", "true");
        router.push("/createletter");
      } else {
        alert("Invalid username or password!");
      }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-grey-700 ">
          Admin
        </h1>
        <form className="mt-6" onSubmit={adminSignIn}>
          <div className="mb-2">
            <label
              htmlFor="Username"
              className="block text-sm font-semibold text-gray-800"
            >
              Username<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {error && <p className="text-red-500 mt-1">{error}</p>}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

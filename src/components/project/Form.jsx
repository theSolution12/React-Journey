import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;

    setUsernameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters long.");
      isValid = false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError("Email must be valid.");
      isValid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white">
      <div className="card w-3/6 h-3/4 min-w-3xl mx-auto mt-10 bg-gray-100 shadow-lg rounded-lg flex justify-center items-center overflow-hidden">
        <div className="card-image bg-blue-400 w-[50%] h-full"></div>

        <form
          onSubmit={validateForm}
          className="flex flex-col justify-center items-center w-[50%] h-full p-8 space-y-4"
        >
          <h1 className="text-3xl font-bold mb-2 text-gray-800">
            Create Account
          </h1>

          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold mb-1">Username</label>
            <input
              type="text"
              placeholder="Arthur Morgan"
              className={`bg-gray-200 p-2 rounded-md border ${
                usernameError ? "border-red-400" : "border-blue-400"
              }`}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <span className="text-sm text-red-500">{usernameError}</span>
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="arthurmorgan@example.com"
              className={`bg-gray-200 p-2 rounded-md border ${
                emailError ? "border-red-400" : "border-blue-400"
              }`}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <span className="text-sm text-red-500">{emailError}</span>
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="········"
              className={`bg-gray-200 p-2 rounded-md border ${
                passwordError ? "border-red-400" : "border-blue-400"
              }`}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <span className="text-sm text-red-500">{passwordError}</span>
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="········"
              className={`bg-gray-200 p-2 rounded-md border ${
                confirmPasswordError ? "border-red-400" : "border-blue-400"
              }`}
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <span className="text-sm text-red-500">{confirmPasswordError}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition-colors mt-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

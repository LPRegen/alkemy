import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = event.target.email.value.toString().trim();
    const password = event.target.password.value;

    if (email === "" || password === "") {
      console.log("Please complete all required fields.");
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      console.log("Please enter a valid email address.");
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      console.log("Invalid credentials, please try again.");
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("auth_token", token);
        return navigate("/");
      });
  };

  const formStyle = {
    display: "grid",
    gap: "8px",
  };

  const labelStyle = {
    display: "flex",
    gap: "4px",
  };

  const buttonStyle = {
    display: "grid",
    margin: "16px",
  };

  return (
    <>
      <h2>Welcome back!</h2>
      <form onSubmit={submitHandler} style={formStyle}>
        <label style={labelStyle}>
          <span>Email address</span>
          <input type="text" name="email" />
        </label>
        <label style={labelStyle}>
          <span>Password</span>
          <input type="password" name="password" />
        </label>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </>
  );
};

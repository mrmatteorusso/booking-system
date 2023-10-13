import { useState } from "react";

export default function LoginForm(props) {
  function submitHandler(event) {
    console.log("I am in Login form submitHandler");
    event.preventDefault();
    const enteredUsername = event.target.username.value;
    const enteredPassword = event.target.password.value;
    const credentials = {
      username: enteredUsername,
      password: enteredPassword,
    };
    console.log("those are credentials", credentials);

    console.log("credentials from Login component", credentials);
    props.addLoginData(credentials);
  }

  return (
    <form method="POST" onSubmit={submitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" name="username" type="text"></input>
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="text"></input>
      <button>Login</button>
    </form>
  );
}

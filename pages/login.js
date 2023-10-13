import { useState } from "react";
import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [correctLogin, setCorrectLogin] = useState(true);
  async function addLoginDataHandler(credentials) {
    console.log("this is credentials from page", credentials);
    if (Object.keys(credentials) === 0) {
      console.log("no credentials");
      return;
    }
    const response = await fetch("/api/new-login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setCorrectLogin(data.correctLogin);
    console.log("this is the response from login page", data.correctLogin);
    if (data.correctLogin) {
      router.push("/");
    }
  }
  return (
    <div className="login-form">
      <h1>Welcome to the Ice Skating Booking System</h1>
      <LoginForm addLoginData={addLoginDataHandler} />
      {!correctLogin && (
        <h4 style={{ color: "red" }}>Wrong username or password</h4>
      )}
    </div>
  );
}

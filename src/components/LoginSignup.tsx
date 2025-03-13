"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithGoogle, signInWithEmail, signUpWithEmail } from "../../lib/auth";
import Button from "./ui/button";
import { Button2 } from "./ui/Button2";

interface LoginSignupProps {
  type: "login" | "signup"; // Determines if it's login or signup
}

export default function LoginSignup({ type }: LoginSignupProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  const handleAuth = async () => {
    let user;
    if (type === "login") {
      user = await signInWithEmail(email, password);
    } else {
      user = await signUpWithEmail(email, password);
    }

    if (user) {
      router.push("/"); // Redirect to home after success
    }
  };

  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      router.push("/"); // Redirect after Google login
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{type === "login" ? "Login" : "Sign Up"}</h2>
      <input
        type="email"
        placeholder="Email"
        className="p-2 border rounded w-64 mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border rounded w-64 mb-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
              <Button2
                onClick={handleAuth}
                variant="destructive"
                className="h-9 bg-[#1175BC] hover:bg-[#0B2838] text-white flex items-center rounded-[14px]" 
              >
                {type === "login" ? "Sign In" : "Create Account"}
              </Button2>
              <Button2
                onClick={handleGoogleSignIn}
                variant="destructive"
                className="h-9 bg-[#00AEEF] hover:bg-[#0B2838] text-white flex items-center rounded-[14px]" 
              >
                Continue with Google
              </Button2>
      <p className="mt-4">
        {type === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
        <button onClick={() => router.push(type === "login" ? "/signup" : "/login")} className="text-blue-600 hover:underline">
          {type === "login" ? "Create an account" : "Sign In"}
        </button>
        
      </p>

    </div>
  );
}

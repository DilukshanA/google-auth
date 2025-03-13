"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react'
import { Button2 } from './ui/Button2'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {auth, logout} from "../../lib/auth"

const Hero = () => {
    const [user, setUser] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
          setUser(user);
        });
        return () => unsubscribe();
      }, []);

      const handleAuthAction = async () => {
        if (user) {
          await logout();
        } else {
          router.push("/login"); // Redirect to login page
        }
      };

  return (
    <div className="flex flex-col">
      {/*show user email */}
      <div className="pb-8">
      {
      user?
      (
      <div className="flex flex-col justify-center items-center">
        <img src={user.photoURL} alt="Profile" referrerPolicy="no-referrer" className="w-16 h-16 rounded-full mb-2" />
        <span>{user.displayName}</span>
        <span>{user.email}</span>

      </div>
      )
      :
      <></>
      }
      </div>
        <Button2
          variant="destructive"
          className="h-9 bg-[#1175BC] hover:bg-[#0B2838] text-white flex items-center rounded-[14px]"
          onClick={handleAuthAction}
        >
          {user ? "Logout" : "Login/Signup"} <MdKeyboardDoubleArrowRight className="h-6 w-6" />
        </Button2>
    </div>
  )
}

export default Hero
"use client"

import { authFirebase } from "@/app/db";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    signOut(authFirebase).then(() => {
      router.push("/login");
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
    </>
  );
}
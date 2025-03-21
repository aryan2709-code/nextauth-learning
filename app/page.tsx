// How to figure out that the user is logged in or not (authenticated or not) and on that basis , show him the logout or sign in options
"use client";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";

// For this purpose , the next-auth library provides us with a useSession Hook  
export default function Home() {
  return <SessionProvider>
    <RealHome />
  </SessionProvider>
}


function RealHome() {
  const session = useSession();

 return (
  <div>
    {session.status === "authenticated" && <button onClick={() => signOut()}>LogOut</button>}
    {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
  </div>
 )
}


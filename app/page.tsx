"use client";

import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

  function goToSignup  () {
    router.push("/signup");
  };

  return (
    <>
      <button onClick={goToSignup}>Signup</button>
    </>
  );
}

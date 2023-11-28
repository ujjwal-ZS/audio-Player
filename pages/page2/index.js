import { useRouter } from "next/router";
import React from "react";

export default function Page2() {
  const router = useRouter();
  return (
    <>
      <div className="bg-blue-500">Page2</div>
      <button onClick={() => router.push("/")}>previous</button>
      <br></br>
    </>
  );
}

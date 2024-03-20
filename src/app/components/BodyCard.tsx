"use client";

import { useSession } from "next-auth/react";
import React from "react";

const BodyCard = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="container mx-auto m-6">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h1 className="text-2xl mb-4">Welcome to the Next.js Starter</h1>
          <p className="mb-2">
            This is a auth starter template for Next.js with Tailwind CSS. It
            includes basic google authentication authentication connected to
            MongoDB database.
          </p>
          <p>
            {session
              ? `You are signed in as ${session.user?.name}. You can sign out.`
              : "You are not signed in. You can sign in or sign up."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BodyCard;

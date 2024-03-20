"use client";

import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
};

const NavBar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState<Record<string, Provider> | null>(
    null
  );

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };

    fetchProviders();
  }, []);

  return (
    <nav className="bg-slate-200 p-6">
      <div className="flex gap-4 justify-between container mx-auto">
        <div>Logo</div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex gap-4">
          {!session ? (
            providers &&
            Object.values(providers).map((provider, index) => (
              <div
                key={index}
                onClick={() => signIn(provider.id)}
                className="cursor-pointer border border-black px-2 py-1 rounded-full hover:bg-slate-300"
              >
                Sign In or Sign Up with {provider.name}
              </div>
            ))
          ) : (
            <div
              onClick={() => signOut()}
              className="cursor-pointer border border-black px-2 py-1 rounded-full hover:bg-slate-300"
            >
              Sign Out
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

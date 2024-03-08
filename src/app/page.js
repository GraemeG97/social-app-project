import { SignUpButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div>
          <Image
            className="rounded-lg"
            src="/golf.png"
            height={300}
            width={300}
            alt="ScoreCard Logo"
          />
        </div>
        <SignedIn>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Welcome to ScoreCard
            </h1>

            <div>
              <SignInButton>
                <button>Sign In</button>
              </SignInButton>
            </div>
            <div>
              <p className="text-center">
                Don&apos;t have an account?
                <SignUpButton>
                  <button className="text-blue-500 hover:underline ml-1">
                    {" "}
                    Sign Up
                  </button>
                </SignUpButton>
              </p>
            </div>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}

import { SignUpButton, SignedOut } from "@clerk/nextjs";
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
        <SignedOut>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-semibold text-center mb-8">
              Welcome to ScoreCard
            </h1>

            <div className="mb-6">
              <SignInButton>
                <button className="w-full px-4 py-2 bg-blue-500 text white font-semibold rounded md hover:bg-blue-600 transition duration-300">
                  Sign In
                </button>
              </SignInButton>
            </div>
            <div>
              <p className="text-center text gray-700">
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
        </SignedOut>
      </div>
    </main>
  );
}

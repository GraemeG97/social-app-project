import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

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
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-3xl font-semibold text-center mb-8">
            Welcome to ScoreCard
          </h1>
          <Link href="/sign-in">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md w-full mb-4 transition duration-300 hover:bg-blue-600">
              Sign In
            </button>
          </Link>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-500 hover:underline ml-1"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

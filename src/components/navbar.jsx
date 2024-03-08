import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs";

export default function NavBar() {
  const { userId } = auth();
  console.log(userId);
  return (
    <nav className="flex items-center justify-between px-6 bg-gray-100">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image
            className="rounded-lg hover:text-gray-900 hover:shadow-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
            src="/golf.png"
            height={60}
            width={60}
            alt="Logo for ScoreCard"
          />
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-6 ml-auto transition-all duration-500 ease-in-out">
        <Link
          href="/posts"
          className=" hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          Posts
        </Link>
        <Link
          href="new-post"
          className=" hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          Create Post
        </Link>
        <Link
          href="/userProfile"
          className=" hover:text-gray-900 hover:shadow-md rounded-md px-4 py-2 bg-gray-200 hover:bg-gray-300"
        >
          Profile
        </Link>
      </div>
      <div className="px-4 py-2">
        {userId ? <UserButton /> : <SignInButton />}
      </div>
    </nav>
  );
}

import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const clubs = (await sql`SELECT * FROM golf_equipment`).rows;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-500 animate-pulse shadow-lg">
        Latest Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {clubs.map((club) => (
          <div key={club.id} className="bg-white rounded-lg shadow-lg p-4">
            <h3 className="text-2xl font-extrabold mb-2">{club.name}</h3>
            <Image
              className="w-full h-48 object-cover rounded-md mb-2"
              src={club.imageurl}
              width={75}
              height={75}
              alt="image of club"
            />

            <Link
              href={`/posts/${club.id}`}
              className="text-blue-700 font-semibold text-lg hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

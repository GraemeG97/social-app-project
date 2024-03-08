import { sql } from "@vercel/postgres";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const clubs = (await sql`SELECT * FROM golf_equipment`).rows;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center bg-opacity-75">
      <h1 className="text-3xl font-bold text-center mb-8">
        Golf Club Reviews:
      </h1>
      <div className="flex flex-row flex-wrap justify-center">
        {clubs.map((club) => (
          <div key={club.id} className="m-12">
            <h3 className="text-2xl font-extrabold mb-2">{club.name}</h3>
            <Image
              className="w-32 h-32 object-cover rounded-md mb-2"
              src={club.imageurl}
              width={75}
              height={75}
              alt="image of club"
            />

            <Link
              href={`/posts/${club.id}`}
              className="text-blue-700 font-semibold text-xlg"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

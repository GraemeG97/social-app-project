import { sql } from "@vercel/postgres";
import Image from "next/image";

export default async function Page({ params }) {
  const club = (await sql`SELECT * FROM golf_equipment WHERE id = ${params.id}`)
    .rows[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-cover bg-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">{club.name}</h2>
      </div>
      {club.imageurl && (
        <Image
          src={club.imageurl}
          width={500}
          height={500}
          className="w-64 h-64 object-cover rounded-lg mb-4"
          alt="Image of specific golf club we are reviewing"
        />
      )}
      <br />
      <p className="text-lg mb-4">{club.description}</p>
      <br></br>
      <p className="text-xl font-semibold">£ {club.price}</p>
    </div>
  );
}

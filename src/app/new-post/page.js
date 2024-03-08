import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import SubmitButton from "@/components/SubmitButton";

export default async function Page() {
  async function handleAddPost(formData) {
    "use server";
    const name = formData.get("name");
    const imageurl = formData.get("imageurl");
    const description = formData.get("description");
    const price = formData.get("price");

    const postResult = (
      await sql`INSERT INTO golf_equipment (name, imageurl, description, price) VALUES (${name}, ${imageurl}, ${description}, ${price})`
    ).rows;
    revalidatePath("/posts");

    redirect("/posts");
  }

  return (
    <div className="mt-8 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Add Golf Club Review</h2>
      <div className="w-96 bg-gray-100 rounded-lg p-8">
        <form action={handleAddPost} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name of Golf Club
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price
            </label>
            <input
              id="price"
              type="text"
              name="price"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="e.g 299.00"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-semibold mb-2"
            >
              Review/Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Review of club"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="imageurl"
              className="block text-gray-700 font-semibold mb-2"
            >
              Image URL
            </label>
            <input
              id="imageurl"
              type="text"
              name="imageurl"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Paste in web address of image"
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block text-gray-700 font-semibold mb-2"
            >
              Type of Club
            </label>
            <input
              id="type"
              type="text"
              name="type"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Driver or Putter etc"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

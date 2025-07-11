import { db, eq } from "@/db"
import { posts as postsTable } from '@/db/schema/posts'
import { users as usersTable } from '@/db/schema/users'

export default async function Home() {

  // Posts
  // const posts = await db.select().from(postsTable)


  // Posts inner join Users
  const posts = await db
    .select()
    .from(postsTable)
    .innerJoin(usersTable, eq(usersTable.id, postsTable.userId))

  console.log(posts);
  return (
    <main className="text-center mt-10">
      <h1>Threads</h1>
      <p>Threads is a clone of x.com</p>
    </main>
  );
}

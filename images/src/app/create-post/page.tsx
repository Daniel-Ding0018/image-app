import CreatePostForm from "@/app/create-post/create-post-form"

import { db, eq, sql } from "@/db"
import { users as usersTable } from "@/db/schema/users"


import { redirect } from "next/navigation"

// export const runtime = 'edge'

export default async function Create() {
  const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id, '1'))
      .then((result) => result[0])

  return <CreatePostForm user={{name: user.firstName, image: user.avatar}} />
}
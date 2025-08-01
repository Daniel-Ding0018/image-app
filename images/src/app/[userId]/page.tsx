import FeedPost from "@/app/components/feed-post"
import { notFound } from "next/navigation"
import { users as usersTable } from "@/db/schema/users"
import { db, eq } from "@/db"
import { userPostsQuery } from "@/db/queries/postFeed"
import Profile from "./profile"

export default async function ProfilePage({ params }: {params: Promise<{ userId: string }>}) {  
  const { userId } = await params
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, userId))
    .then((result) => result[0])

  if (!user) {
    notFound()
  }

  const posts = await userPostsQuery.execute({ userId: user.id })
  return (
    <>
      <Profile user={{name: user.username, image: user.avatar}} />

      <div className="mt-10">
        {/* <div className="text-neutral-600 dark:text-neutral-400">{user.followers} followers</div> */}
      </div>

      <div className="mt-7">
        <div className="w-full border-b mb-5">
          <div className="mb-2">Posts</div>
        </div>
        <div className="flex flex-col divide-y">
          {posts?.map((post) => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
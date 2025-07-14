export type User = {
  id: string
  username: string
  firstname: string
  lastname: string
  avatar: string
}

export type Media = {
  id: number
  type: "image" | "video"
  url: string
  width: number
  height: number
}

export type Post = {
  id: number
  user: User
  content: string
  media: Media | null
  createdAt: Date
}

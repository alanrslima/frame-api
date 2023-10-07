export interface PostModel {
  id: string
  userId: string
  description: string
  photos: Array<{ url: string }>
}

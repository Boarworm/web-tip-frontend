import { api } from "@/api/api";
import { handleApiError } from "@/utils/handleApiError";
import { PostDto } from "@/dtos/post.dto";
import { PostMap } from "@/mappers/post.mapper";
import { Post } from "@/models/post.model";

export async function getPosts(): Promise<Post[]> {
  try {
    const res = await api.get<{ data: PostDto[] }>("api/v1/blog/posts");
    return res.data.data.map(PostMap);
  } catch (error) {
    handleApiError(error, "Failed to fetch posts");
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const res = await api.get<{ data: PostDto }>(`api/v1/blog/posts/${slug}`);
    return PostMap(res.data.data);
  } catch (error) {
    handleApiError(error, "Failed to fetch post");
    return null;
  }
}

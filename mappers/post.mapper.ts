import { PostDto } from "@/dtos/post.dto";
import { Post } from "@/models/post.model";

export function PostMap(dto: PostDto): Post {
  return new Post(
    dto.id,
    dto.title,
    dto.slug,
    new Date(dto.created_at),
    dto.is_enabled,
    dto.containers,
    dto.intro_text,
    dto.image,
    dto.meta_title,
    dto.meta_description,
    dto.meta_keywords
  );
}

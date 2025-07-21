export interface PostDto {
  id: number;
  title: string;
  slug: string;
  created_at: string;
  is_enabled: boolean;
  containers: string;
  intro_text: string;
  image: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
}

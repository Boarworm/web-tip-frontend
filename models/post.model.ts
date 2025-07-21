import { formatDate } from "@/utils/date";

export class Post {
  constructor(
    public id: number,
    public title: string,
    public slug: string,
    public createdAt: Date,
    public isEnabled: boolean,
    public containers: string,
    public introText: string,
    public image: string,
    public metaTitle: string,
    public metaDescription: string,
    public metaKeywords: string
  ) {}

  get url(): string {
    return `/blog/${this.slug}`;
  }

  get formattedDate(): string {
    return formatDate(this.createdAt);
  }
}

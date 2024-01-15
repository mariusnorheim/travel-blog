// blog-post.model.ts
export interface BlogPost {
    id: number;
    title: string;
    text: string;
    date: Date | string; // can be either Date object or ISO string
    image?: string;
  }
export interface BlogPost {
    id: number;
    title: string;
    content: string;
    date: Date | string;
    image?: string;
}

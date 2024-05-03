export type BlogPost = {
    id: number;
    title: string;
    content: string;
    date: Date | string;
    lastModified: Date | string;
    imageId: number;
    userId: number;
    destinationId: number;
}

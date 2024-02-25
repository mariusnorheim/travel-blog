export interface Destination {
    id: number;
    city: string;
    country: string;
    year: Date | string;
    galleryId?: number[];
    blogId?: number[];
}

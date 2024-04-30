export type Gallery = {
    id: number;
    title: string;
    city: string;
    country: string;
    year: Date | string;
    images: {
        text: string;
        src: string;
    }[];
}

export interface Gallery {
    id: number;
    title: string;
    location: string;
    date: Date | string;
    images: {
        text: string;
        src: string;
    }[];
}

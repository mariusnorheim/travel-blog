import { createUploadthing, type FileRouter } from "uploadthing/express";

const fileRouter = createUploadthing();

export const uploadRouter = {
    imageUpload: fileRouter((["image", "video"]))
    //.middleware(({ req }) => auth(req))
    .onUploadComplete((data) => console.log("file", data)),
} satisfies FileRouter;

export type OurFileRouter = typeof uploadRouter;
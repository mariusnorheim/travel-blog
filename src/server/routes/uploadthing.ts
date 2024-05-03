import express from "express";
import { createRouteHandler } from "uploadthing/express";
import { uploadRouter } from "@server/lib/uploadthing";

const app = express();

app.use(
    "/api/uploadthing",
    createRouteHandler({
        router: uploadRouter,
    }),
);
import {
    pgTable,
    serial,
    text,
    timestamp,
    integer,
    uniqueIndex,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel, getTableColumns } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'

// Connect to Vercel Postgres
export const db = drizzle(sql)

// User table
export const UsersTable = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        email: text('email').notNull(),
        image: text('image').notNull(),
        createdAt: timestamp('createdAt').defaultNow().notNull(),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(users.email),
        }
    }
)
export type User = InferSelectModel<typeof UsersTable>
export type NewUser = InferInsertModel<typeof UsersTable>
export type UpdateUser = Partial<ReturnType<typeof getTableColumns<typeof UsersTable>>>
export type DeleteUser = { id: number }

// Destinations table
export const DestinationsTable = pgTable(
    'destinations',
    {
        id: serial('id').primaryKey(),
        city: text('city').notNull(),
        country: text('country').notNull(),
        description: text('description'),
        year: timestamp('year').notNull(),
    }
)
export type Destination = InferSelectModel<typeof DestinationsTable>
export type NewDestination = InferInsertModel<typeof DestinationsTable>
export type UpdateDestination = Partial<ReturnType<typeof getTableColumns<typeof DestinationsTable>>>
export type DeleteDestination = { id: number }


// Galleries table
export const GalleriesTable = pgTable(
    'galleries',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        description: text('description'),
        date: timestamp('date').defaultNow().notNull(),
        lastModified: timestamp('lastModified').defaultNow().notNull(),
        destinationId: integer('destinationId').notNull().references(() => DestinationsTable.id),
    }
)
export type Gallery = InferSelectModel<typeof GalleriesTable>
export type NewGallery = InferInsertModel<typeof GalleriesTable>
export type UpdateGallery = Partial<ReturnType<typeof getTableColumns<typeof GalleriesTable>>>
export type DeleteGallery = { id: number }

// Images table
export const ImagesTable = pgTable(
    'images',
    {
        id: serial('id').primaryKey(),
        description: text('description'),
        src: text('src').notNull(),
        userId: integer('userId').notNull().references(() => UsersTable.id),
        galleryId: integer('galleryId').notNull().references(() => GalleriesTable.id),
    }
)
export type Image = InferSelectModel<typeof ImagesTable>
export type NewImage = InferInsertModel<typeof ImagesTable>
export type UpdateImage = Partial<ReturnType<typeof getTableColumns<typeof ImagesTable>>>
export type DeleteImage = { id: number }

// Posts table
export const PostsTable = pgTable(
    'posts',
    {
        id: serial('id').primaryKey(),
        title: text('title').notNull(),
        content: text('content').notNull(),
        date: timestamp('date').defaultNow().notNull(),
        lastModified: timestamp('lastModified').defaultNow().notNull(),
        imageId: integer('userId').default(1).notNull().references(() => ImagesTable.id),
        userId: integer('userId').notNull().references(() => UsersTable.id),
        destinationId: integer('destinationId').notNull().references(() => DestinationsTable.id),
    }
)
export type Post = InferSelectModel<typeof PostsTable>
export type NewPost = InferInsertModel<typeof PostsTable>
export type UpdatePost = Partial<ReturnType<typeof getTableColumns<typeof PostsTable>>>
export type DeletePost = { id: number }
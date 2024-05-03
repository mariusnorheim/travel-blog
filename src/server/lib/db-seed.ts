import { dbMigrate } from '@server/lib/db-migrate';
import { 
    db,
    UsersTable, User, NewUser,
    DestinationsTable, Destination, NewDestination,
    GalleriesTable, Gallery, NewGallery,
    ImagesTable, Image, NewImage,
    PostsTable, Post, NewPost,
    } from '@server/lib/db';

const newUsers: NewUser[] = [
    {
        name: 'Marius Norheim',
        email: 'marius@mariusnorheim.dev',
        image: 'https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg',
    },
];

const newDestinations: NewDestination[] = [
    {
        city: 'Phuket',
        country: 'Thailand',
        year: new Date('2023-12-04'),
    },
    {
        city: 'Koh Samui',
        country: 'Thailand',
        year: new Date('2023-12-22'),
    },
    {
        city: 'Phuket',
        country: 'Thailand',
        year: new Date('2024-03-04'),
    },
    {
        city: 'Krabi',
        country: 'Thailand',
        year: new Date('2024-03-18'),
    },
    {
        city: 'Ko Lanta',
        country: 'Thailand',
        year: new Date('2024-03-21'),
    },
];

const newGalleries: NewGallery[] = [
    {
        name: 'Thailand 2023',
        date: new Date('2023-12-08'),
        lastModified: new Date('2024-01-08'),
        destinationId: 1,
    },
    {
        name: 'Thailand 2024',
        date: new Date('2024-03-07'),
        lastModified: new Date('2024-04-12'),
        destinationId: 3,
    },
];

const newImages: NewImage[] = [
    {
        description: 'Image 1',
        src: 'image-url-1',
        userId: 1,
        galleryId: 1,
    },
    {
        description: 'Image 2',
        src: 'image-url-2',
        userId: 1,
        galleryId: 1,
    },
    {
        description: 'Image 3',
        src: 'image-url-3',
        userId: 1,
        galleryId: 2,
    },
    {
        description: 'Image 4',
        src: 'image-url-4',
        userId: 1,
        galleryId: 3,
    },
    {
        description: 'Image 5',
        src: 'image-url-5',
        userId: 1,
        galleryId: 4,
    }
];

const newPosts: NewPost[] = [
    {
        title: 'Sample Post 1',
        content: 'Text for sample post 1',
        date: new Date('2023-12-17'),
        lastModified: new Date('2023-12-17'),
        imageId: 1,
        userId: 1,
        destinationId: 1
    },
    {
        title: 'Sample Post 2',
        content: 'Text for sample post 2',
        date: new Date('2023-12-27'),
        lastModified: new Date('2023-12-27'),
        imageId: 1,
        userId: 1,
        destinationId: 1
    },
    {
        title: 'Sample Post 3',
        content: 'Text for sample post 3...',
        date: new Date('2024-03-24'),
        lastModified: new Date('2024-03-24'),
        imageId: 1,
        userId: 1,
        destinationId: 3
    },
];

export async function seed() {
    // Create table rawdog SQL
    // const createTable = await sql.query(`
    //     CREATE TABLE IF NOT EXISTS users (
    //         id SERIAL PRIMARY KEY,
    //         name VARCHAR(255) NOT NULL,
    //         email VARCHAR(255) UNIQUE NOT NULL,
    //         image VARCHAR(255),
    //         "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    //     );
    // `);
    // console.log(`Created "users" table`);
    const migrateDatabase = await dbMigrate();
    console.log('Migrated database')

    const insertedUsers: User[] = await db
        .insert(UsersTable)
        .values(newUsers)
        .returning();
    console.log(`Seeded ${insertedUsers.length} users`);

    const insertedDestinations: Destination[] = await db
    .insert(DestinationsTable)
    .values(newDestinations)
    .returning();
    console.log(`Seeded ${insertedDestinations.length} destinations`);

    const insertedGalleries: Gallery[] = await db
    .insert(GalleriesTable)
    .values(newGalleries)
    .returning();
    console.log(`Seeded ${insertedGalleries.length} galleries`);

    const insertedImages: Image[] = await db
    .insert(ImagesTable)
    .values(newImages)
    .returning();
    console.log(`Seeded ${insertedImages.length} images`);

    const insertedPosts: Post[] = await db
    .insert(PostsTable)
    .values(newPosts)
    .returning();
    console.log(`Seeded ${insertedPosts.length} posts`);

    return {
        migrateDatabase,
        insertedUsers,
        insertedDestinations,
        insertedGalleries,
        insertedImages,
        insertedPosts,
    };
}

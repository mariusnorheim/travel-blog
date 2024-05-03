import express from 'express';
import cors from 'cors';
import { db } from '@server/lib/db';

const app = express();
const port = 3000;
if(process.env['NODE_ENV'] !== 'production') {
    cors({ origin: 'http://localhost:4200' });
} else {
    cors({ origin: 'https://www.mariusinbloom.wtf' });
}

// const { Pool } = require('pg');

// // PostgreSQL connection setup
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL, // replace with your connection string
// });


app.get('/api/data', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM table'); // replace with your SQL query
        const results = { 'results': (result) ? result.rows : null};
        res.send(JSON.stringify(results));
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
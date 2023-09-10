import express from 'express';

import { env } from './env';

const app = express();
const port = env.PORT;

app.get("/", (req, res) => {
    res.send('Express Server');
});

app.listen(port, () => {
    // listening on
    console.log(`listening on, http://localhost:${port}`);
});

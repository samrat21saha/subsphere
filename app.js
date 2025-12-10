import express from 'express';

import { PORT } from './config/env.js';

const app = express();

app.get('/', (req, res) =>{
    res.send("Hello This is Subtrack server");
});

app.listen(PORT, () =>{
    console.log(`Server live on PORT: http://localhost:${PORT}`);
});

export default app;
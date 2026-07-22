import app from "#app";
import db from "#db/client";

const PORT = process.env.PORT ?? 3000;

await db.connect();

app.listenerCount(PORT, ()=> {
  console.log (`listerning on port ${PORT}...`);
})

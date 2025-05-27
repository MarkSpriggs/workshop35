import app from "#app";
import client from "#db/client";

const PORT = process.env.PORT ?? 3000;

await client.connect();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

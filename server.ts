import app from "./src/app";
import { run } from "./src/db/connection";

const port = process.env.PORT || 8000;

run()
  .then(() => {
    console.log("Connected to mongoose.");
    app.listen(port, () => {
      console.log(`Server running in port ${port}.`);
    });
  })
  .catch((error) => {
    console.log(`An error occurred while connecting to mongoose: ${error}`);
  });

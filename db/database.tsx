import { Client, Databases, ID, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6535132800eaa4dddb52");

const database = new Databases(client);
const storage = new Storage(client);
export { database, ID, storage };

import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI as string | undefined;
if (!uri) {
  // Avoid throwing during build; runtime callers should handle connection errors
  // by checking for missing URI.
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient> | undefined;

if (uri) {
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  if (process.env.NODE_ENV !== "production") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    clientPromise = client.connect();
  }
}

export async function getDb() {
  if (!clientPromise) throw new Error("MONGODB_URI not configured");
  const cli = await clientPromise;
  const dbName = process.env.MONGODB_DB || "portfolio";
  return cli.db(dbName);
}

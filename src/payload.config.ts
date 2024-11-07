import { buildConfig } from "payload/config";
import path from "path";
import { Books } from "./collections/Books";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";

export default buildConfig({
  serverURL: process.env.SERVER_URL || "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [Books, Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
  cors: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://your-frontend-domain.com",
  ],
});

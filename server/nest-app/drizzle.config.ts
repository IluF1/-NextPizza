import dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit'
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

dotenv.config()

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
})
export const db = drizzle({ client: pool })

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/db/schema',
})

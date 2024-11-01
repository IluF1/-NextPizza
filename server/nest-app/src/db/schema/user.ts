import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
    id: integer().primaryKey(),
    email: varchar().unique(),
    password: varchar(),
})

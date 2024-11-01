import { integer, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

export const pizza = pgTable('pizza', {
    id: integer(),
    name: varchar(),
    price: integer(),
    description: varchar(),
    image_url: varchar(),
    created_at: timestamp(),
    updated_at: timestamp(),
    user_id: integer(),
})

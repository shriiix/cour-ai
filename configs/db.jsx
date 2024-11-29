import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(NEXT_PUBLIC_DB_CONNECTION_STRING);
export const db = drizzle(sql);

// export const db = drizzle({ client: sql });


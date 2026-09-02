import mysql from "mysql2/promise";

/**
 * One pooled connection, reused across route handler invocations. Reading
 * credentials lazily (not at module load) keeps `next build` from failing
 * when env vars aren't set yet.
 */
let pool: mysql.Pool | null = null;

export function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT ?? 3306),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
    });
  }
  return pool;
}

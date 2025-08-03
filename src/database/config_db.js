import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function openDB() {
  const db = await open({
    filename: './flash_translator.db',
    driver: sqlite3.Database
  });

  return db
}







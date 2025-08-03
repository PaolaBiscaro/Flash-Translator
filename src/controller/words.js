import { openDB } from "../database/config_db.js";

export async function createTableWords() {

  //Abre conexão com o banco de dados
  const db = await openDB()

  //Cria a tabela
  await db.run(`
    CREATE TABLE IF NOT EXISTS Words (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      untranslated_word VARCHAR(30),
      translated_word VARCHAR(30)
    )
  `);
  //Fecha conexão com o banco de dados
  await db.close();

}

export async function insertWords(untranslated_word, translated_word) {
  const db = openDB()

  await db.run(`INSERT INTO Words (untranslated_word, translated_word) VALUES (?,?)`, [untranslated_word, translated_word])

  await db.close()
}



const {query} = require('../../../utils/mysql')

const findAll = async () => {
    const sql = `SELECT pe.*, po.description FROM personal pe JOIN position po
          ON po.id = pe.position_id ORDER BY id DESC`;
    return await query(sql, []);
  };

  
const save = async (person) => {
    if (
      !person.name ||
      !person.surname ||
      !person.birthday
    )
      throw Error('Missing fields');
    const sql = `INSERT INTO personal (name,surname,lastname,birthday
          ) VALUES (?,?,?,?)`;
    const { insertedId } = await query(sql, [
      person.name,
      person.surname,
      person.lastname || null,
      person.birthday,
    ]);
    return { ...person, id: insertedId };
  };
  
const update = async (person) => {
    if (
      !person.name ||
      !person.surname ||
      !person.birthday ||
      !person.id
    )
      throw Error('Missing fields');
    const sql = `UPDATE personal SET name = ?, surname= ?,lastname= ?,birthday = ? WHERE id = ?`;
    const result = await query(sql, [
      person.name,
      person.surname,
      person.lastname || null,
      person.birthday,
      person.id
    ]);
    console.log(result);
    return true;
  };
  
  module.exports = {
    findAll,
    save,
    update,
  };
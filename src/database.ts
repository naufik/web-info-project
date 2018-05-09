import * as Mongoose from "mongoose"

Mongoose.connect('mongodb://todd_db:algorithmsarefun@ds161529.mlab.com:61529/duedate');

const db = Mongoose.connection;



export default db;
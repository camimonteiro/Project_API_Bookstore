import mongoose from "mongoose"

mongoose.connect("mongodb+srv://davifernandes:teodoro@cluster0.tdcdm.mongodb.net/FluxoDeCaixas");

let db = mongoose.connection;

export default db;

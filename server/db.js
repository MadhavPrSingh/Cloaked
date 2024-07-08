import { Sequelize } from "sequelize";
import { userModel } from './models/user.js'


export const connection = async () => {
    const sequelize = new Sequelize("cloakdb", "postgres", "Madhav#2003", {
        host: "localhost",
        dialect: "postgres"
    });
    let User = null;
    try {
        await sequelize.authenticate();
        console.log("Connection to database has been established successfully");
        User = userModel(sequelize);
        await sequelize.sync();
        console.log("table created successfully");
    } catch(err) {
        console.log("Unable to connect to the database", err);
    }
};
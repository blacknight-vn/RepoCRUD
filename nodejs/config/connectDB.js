import {Sequelize} from "sequelize";

const sequelize = new Sequelize('database_development_3', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect the database', error);
    }
}

export default connectDB;

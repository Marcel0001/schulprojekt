import "reflect-metadata";
import {createConnection} from "typeorm";
import { Customer } from "./entity/Customer";

createConnection().then(async connection => {

    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);


    const customers = await connection.manager.find(Customer);
    console.log('all Customers', customers);

}).catch(error => console.log(error));

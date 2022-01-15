import { Injectable } from '@nestjs/common';
import { Connection, createConnection } from "typeorm";
import { Customer } from '../entity/Customer';

@Injectable()
export class CustomerService {

    constructor(private connection: Connection) {

    }


    async getCustomers(): Promise<any> {
        return await this.connection.manager.find(Customer);
    }
}

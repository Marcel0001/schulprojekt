import { Injectable } from '@nestjs/common';
import { User } from '../models/user';

@Injectable()
export class UsersService {

    private readonly users: User[] = [
        { userId: 1, userName: 'admin', password: 'pwd' },
        { userId: 2, userName: 'john', password: 'changeme', },
    ]

    async findOne(userName: string): Promise<User | undefined> {
        return this.users.find(user => user.userName === userName);
    }
}

import { User } from 'src/models/user';
export declare class UsersService {
    private readonly users;
    findOne(userName: string): Promise<User | undefined>;
}

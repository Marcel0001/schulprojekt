import { User } from 'src/models/user';
import { UsersService } from 'src/user/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: User): Promise<any>;
}

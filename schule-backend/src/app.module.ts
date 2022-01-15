import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CustomerService } from './customer/customer.service';

@Module({
  imports: [AuthModule, UserModule, TypeOrmModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, CustomerService],
})
export class AppModule { 


  constructor(private connection: Connection) {}

}

import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { CustomerService } from './customer/customer.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private customerService: CustomerService) { }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    // console.log(req);
    if (
      await this.authService.validateUser(req.body.userName, req.body.password) !==
      null
    )
      return this.authService.login(req.body);
    return '';
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  // @UseGuards(JwtAuthGuard)
  @Get('customers')
  async getCustomers(@Request() req): Promise<any> {
    return this.customerService.getCustomers();

  }
}

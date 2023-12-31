import { Controller, Request, Post, Body, UseGuards, UsePipes, Get } from '@nestjs/common';
import { CreateUserDto, CreateUserSchema } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { JoiValidationPipe } from './pipes/ValidationPipe';


@Controller()
export class AppController {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService
  ) {}

  @Get()
  hello() {
    return 'Hello World!';
  }

  @Post('auth/register')
  @UsePipes(new JoiValidationPipe(CreateUserSchema))
  register(@Body() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
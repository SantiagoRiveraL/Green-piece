import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../../service/user';
import { UserDto } from '../../shared/dtos';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  public async findAll() {
    return await this.userService.findAll();
  }

  @Post()
  public async create(@Body() userDto: UserDto) {
    return await this.userService.create(userDto);
  }
}

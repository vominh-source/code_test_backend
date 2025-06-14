import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { HttpCode } from '@nestjs/common/decorators/http/http-code.decorator';
@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService) {
    }
    @HttpCode(HttpStatus.OK)
    @Post('signup')
    signup(@Body('email') dto: AuthDto){
        return this.authService.signup(dto);
    }
    @Post('signin')
    signin(@Body('email') dto: AuthDto){
        return this.authService.signin(dto);
    }
};
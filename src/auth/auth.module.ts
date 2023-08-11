import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
// https://medium.com/att-israel/authentication-authorization-using-react-nestjs-jwt-token-55f52070a3f2
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      signOptions: { expiresIn: '1d' },
    }),
    UsersModule,
  ],
})
export class AuthModule {}

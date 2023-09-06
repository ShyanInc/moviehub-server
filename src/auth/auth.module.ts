import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';
import { UsersInfoModule } from '../users/usersInfo/users-info.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      signOptions: { expiresIn: '1d' },
    }),
    forwardRef(() => UsersModule),
    UsersInfoModule,
  ],
  exports: [AuthModule, JwtModule],
})
export class AuthModule {}

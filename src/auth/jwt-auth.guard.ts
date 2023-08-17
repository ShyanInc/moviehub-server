import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0].toLowerCase();
      const token = authHeader.split(' ')[1];
      console.log(bearer);
      if (bearer !== 'bearer' || !token) {
        throw new UnauthorizedException('User is not authorized');
      }

      const user = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });
      req.user = user;
      return true;
    } catch (e) {
      throw new UnauthorizedException('User is not authorized');
    }
  }
}

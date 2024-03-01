import { Module } from '@nestjs/common';
import { ClientModule } from './contexts/client/client.module';
import { UserModule } from './contexts/user/user.module';
import { LevelModule } from './contexts/level/level.module';

@Module({
  imports: [ClientModule, UserModule, LevelModule]
})
export class AppModule {}

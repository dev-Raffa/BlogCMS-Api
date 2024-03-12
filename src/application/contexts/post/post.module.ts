import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/database/database.module';
import { registerProviders } from '../../../utils/helpers/register-providers/register-providers.helper';
import { PostEntity } from './entity/post.entity';
import { PostService } from './service/post.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(PostEntity, PostService)
})
export class PostModule {}

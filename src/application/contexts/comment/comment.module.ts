import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../../infra/database/database.module';
import { registerProviders } from '../../../utils/helpers/register-providers/register-providers.helper';
import { CommentEntity } from './entity/comment-entity';
import { CommentService } from './service/comment.service';

@Module({
  imports: [DatabaseModule],
  providers: registerProviders(CommentEntity, CommentService)
})
export class CommentModule {}

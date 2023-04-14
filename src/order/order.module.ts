import { Module } from '@nestjs/common';
import { OrderService } from './services';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [ DatabaseModule, OrderService ],
  exports: [ OrderService ]
})
export class OrderModule {}

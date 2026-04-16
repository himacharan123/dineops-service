import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import {MikroOrmModule} from "@mikro-orm/nestjs"
import config from './mikro-orm.config';
@Module({
  imports: [RestaurantModule,
    MikroOrmModule.forRoot({...config,autoLoadEntities:true})
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

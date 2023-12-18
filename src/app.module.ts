import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './modules/gallery/gallery.module';
import { AuthMiddleware } from './middleware/auth.middleware';

@Module({
  imports: [GalleryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude({ path: 'gallery', method: RequestMethod.GET }, 'cats')
      .forRoutes('gallery');
  }
}

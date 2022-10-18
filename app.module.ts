import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categorias/categories.module';
import { Categories } from './categorias/entities/categories.entity';
import { Product } from './produtos/entities/product.entity';
import { ProductModule } from './produtos/produtos.module';


@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_game_store',
      entities: [Product, Categories],
      synchronize: true
    }),
    ProductModule, CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarroController } from './carro/carro.controller';
import { ServicosController } from './servicos/servicos.controller';

@Module({
  imports: [],
  controllers: [AppController, CarroController, ServicosController],
  providers: [AppService],
})
export class AppModule {}

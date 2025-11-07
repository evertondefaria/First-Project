import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
interface IModelo{
  id: number
  nome:string
}

const modelos : IModelo[] = [
  {id: 1, nome: "Fusca"},
  {id: 2, nome: "Gol"},
  {id: 3, nome: "Corsa"},
  {id: 4, nome: "Civic"},  
] 
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
@Get("/carro")
  list():IModelo[]{
    return modelos
  }

  @Get("/carro/:id")
  obter(@Param("id") id):IModelo | undefined{
    return modelos.find(f=>f.id === Number.parseInt(id))
  }
}


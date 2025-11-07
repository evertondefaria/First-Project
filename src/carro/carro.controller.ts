import { Controller, Get, Param } from '@nestjs/common';

interface IModelo{
  id: number
  nome:string
}

const modelos : IModelo[] = [
  {id: 0, nome: "Fusca"},
  {id: 1, nome: "Gol"}, 
  {id: 2, nome: "Corsa"},
  {id: 3, nome: "Civic"},  
] 

@Controller('carro')
export class CarroController { 
  @Get()
  list(): IModelo[] {
    return modelos;
  }
  @Get(":id")
  obter(@Param("id") id: string): IModelo | undefined {
    return modelos.find(f => f.id === Number.parseInt(id));
  }
}

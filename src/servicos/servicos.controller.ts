import { Controller, Get, Param } from '@nestjs/common';

interface IServico {
  id: number;
  nome: string;
  preco: number; 
}

const servicos: IServico[] = [
  { id: 1, nome: "Pintura", preco: 1500.00 },
  { id: 2, nome: "Troca de Pneus (unidade)", preco: 100.00 },
  { id: 3, nome: "Alinhamento e Balanceamento", preco: 220.50 },
  { id: 4, nome: "Troca de Óleo", preco: 350.00 }
];

@Controller('servicos') 
export class ServicosController {
  @Get()
  list(): IServico[] {
    return servicos;
  }
  @Get(':id')
  obter(@Param('id') id: string): IServico | undefined {
      return servicos.find(s => s.id === Number.parseInt(id)); 
  }
}

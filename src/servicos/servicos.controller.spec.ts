import { Test, TestingModule } from '@nestjs/testing';
import { ServiçosController } from './servicos.controller';

describe('ServiçosController', () => {
  let controller: ServiçosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiçosController],
    }).compile();

    controller = module.get<ServiçosController>(ServiçosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { FeatureConfigService } from './feature-config.service';

describe('FeatureConfigService', () => {
  let service: FeatureConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeatureConfigService],
    }).compile();

    service = module.get<FeatureConfigService>(FeatureConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

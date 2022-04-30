import { Module } from '@nestjs/common';
import { FeatureConfigService } from './feature-config.service';

@Module({
  providers: [FeatureConfigService],
  exports: [FeatureConfigService],
})
export class FeatureConfigModule {}

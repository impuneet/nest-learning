import { Module } from '@nestjs/common';
import { FeatureConfigModule } from '@nest-app/api/feature-config';
@Module({
  imports: [ FeatureConfigModule ],
  controllers: [],
  providers: [],
})
export class AppModule {}

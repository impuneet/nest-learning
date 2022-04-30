import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { appConfiguration, mongoConfiguration } from '../../utils-config/src';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfiguration,
        mongoConfiguration
      ]
    })
  ],
})
export class FeatureConfigModule {}

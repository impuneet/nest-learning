import { Module } from '@nestjs/common';
import { FeatureConfigModule } from '@nest-app/api/feature-config';
import { MongooseModule } from "@nestjs/mongoose"
import { MongoConfiguration, mongoConfiguration } from '@nest-app-hour-nestjs/api/utils-config'
@Module({
  imports: [ FeatureConfigModule,
    // Put some dynamic stuff there
    MongooseModule.forRootAsync({
      inject: [
        mongoConfiguration.KEY
      ],
      useFactory: (config: MongoConfiguration) => {
        return {
          uri: config.uri,
          dbName: config.dbName
        }
      }
    }) 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

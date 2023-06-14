import { Module } from '@nestjs/common';
import { BoilerPartsController } from './boiler-parts.controller';
import { BoilerPartsService } from './boiler-parts.service';
import { BoilerParts } from './boiler-parts.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([BoilerParts])],
  controllers: [BoilerPartsController],
  providers: [BoilerPartsService],
  exports: [BoilerPartsService],
})
export class BoilerPartsModule {}

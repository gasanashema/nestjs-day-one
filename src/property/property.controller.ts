import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All Properties';
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) params,
    @Query('sort', ParseBoolPipe) sort,
  ) {
    return params;
  }

  @Post()
  // @UsePipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:true}))
  create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: CreatePropertyDto,
  ) {
    return body;
  }
}

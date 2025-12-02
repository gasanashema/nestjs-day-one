import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('property')
export class PropertyController {
    @Get()
    findAll(){
        return "All Properties"
    }

    @Get(":id/:slug")
    getOne(@Param() params){
        return params
    }

    @Post()
    create(@Body() body){
        return body
    }

}

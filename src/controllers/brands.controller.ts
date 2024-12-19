import { Controller,Body,Param,Get,Put,Post,Delete } from '@nestjs/common';

@Controller('brands')
export class BrandsController {

    @Get(':brandId')
            getOne(@Param('brandId') brandId: string) {
                return {
                    message: `brand ${brandId}`
                }
            }
        
            @Post()
            create(@Body() payload: any) {
        
                return {
                    message: 'accion de crear', payload
                };
        
            }
        
            @Put(':id')
            update(@Param('id') id: number, @Body() payload: any) {
        
                return {
                    id,
                    payload
                };
        
            }
        
            @Delete(':id')
            delete(@Param('id') id: number) {
        
                return {
                    id
                    
                };
        
            }
}

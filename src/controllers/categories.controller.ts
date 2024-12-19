import { Controller, Get, Param, Query,Body,Post,Put,Delete } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
    @Get(':id/products/:productId')
    getCategory(@Param('productId') productId: string,
     @Param('id') id: string) {
        return {
            message: `product ${productId} and ${id}`
        }
    }

            @Get(':categoriesId')
            getOne(@Param('categoriesId') categoriesId: string) {
                return {
                    message: `categories ${categoriesId}`
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

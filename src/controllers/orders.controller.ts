import { Controller, Param,Body,Get,Put,Post,Delete } from '@nestjs/common';

@Controller('orders')
export class OrdersController {

    @Get(':orderId')
            getOne(@Param('orderId') orderId: string) {
                return {
                    message: `order ${orderId}`
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

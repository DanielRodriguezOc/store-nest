import { Controller, Get, Post,Param,Put,Delete,Body } from '@nestjs/common';

@Controller('users')
export class UsersController {

     @Get(':userId')
        getOne(@Param('userId') userId: string) {
            return {
                message: `user ${userId}`
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

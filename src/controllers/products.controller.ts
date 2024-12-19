import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, /*ParseIntPipe*/} from '@nestjs/common';


import { ParseIntPipe } from '../common/parse-int/parse-int.pipe'
import {CreateProductDto, UpdateProductDto} from '../dtos/products.dto'
import {ProductsService} from '../services/products.service'
@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){

    }

    @Get()
    getProducts(@Query('limit') limit = 500,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        // return {
        //     message:
        //         `products: limit=> ${limit} offset=> ${offset} brand=> ${brand}`
        // }
        return this.productsService.findAll();
    }


    @Get('filter')
    getProductFilter() {
        return {
            message: `yo soy un filter`
        }
    }

    @Get(':productId')
    @HttpCode(HttpStatus.ACCEPTED)
    getOne(@Param('productId', ParseIntPipe) productId: number) {
        // return {
        //     message: `product ${productId}`,
        // };

        return this.productsService.findOne(productId);
    }

    @Post()
    create(@Body() payload: CreateProductDto) {

        // return {
        //     message: 'accion de crear', payload
        // };

         return this.productsService.create(payload);

    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: UpdateProductDto) {

        return this.productsService.update(+id,payload);

    }

    @Delete(':id')
    delete(@Param('id') id: number) {

        return this.productsService.remove(+id); 
    }
}

import {
  ConflictException,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sales } from 'src/sales/model/sales.entity';
import { ResponseMsg } from 'src/shared/helpers/ResponseMsg';

import { EntityRepository, Repository } from 'typeorm';
import { CreateProductDTO } from './dto/create-product.dto';
import { Product } from './model/product.entity';
import { ProductDetailRepository } from './product-detail.repository';
@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  private logger = new Logger();

  async createProduct(createProductDTO: CreateProductDTO) {
    const { product_code, serial_number } = createProductDTO;
    const ProductEntity = new Product();
    ProductEntity.product_code = product_code;
    ProductEntity.serial_number = serial_number;
    return await ProductEntity.save();
  }
}

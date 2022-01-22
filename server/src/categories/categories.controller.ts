import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from '@prisma/client';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller({
  path: 'categories',
  version: '1',
})
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  findAll(): string {
    return 'test';
  }

  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.createCategory({ name: createCategoryDto.name });
  }
}

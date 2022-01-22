import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Category, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    const existsCategory = await this.prisma.category.findUnique({
      where: { name: data.name },
    });

    if (existsCategory) {
      throw new HttpException('Conflict', HttpStatus.CONFLICT);
    }

    return this.prisma.category.create({
      data,
    });
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}
  async create(createGalleryDto: CreateGalleryDto) {
    const picture = await this.prisma.picture.create({
      data: createGalleryDto,
    });
    return picture;
  }

  async findAll() {
    const pictures = await this.prisma.picture.findMany();

    return pictures;
  }

  async findOne(id: string) {
    const picture = await this.prisma.picture.findFirst({ where: { id } });

    return picture;
  }

  async remove(id: string) {
    const deletedPicture = await this.prisma.picture.delete({ where: { id } });

    return deletedPicture;
  }
}

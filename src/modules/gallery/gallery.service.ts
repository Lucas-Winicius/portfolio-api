import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateGalleryDto } from './dto/create-gallery.dto';
import { UpdateGalleryDto } from './dto/update-gallery.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class GalleryService {
  constructor(private prisma: PrismaService) {}
  async create(createGalleryDto: CreateGalleryDto, authCode: string) {
    if (authCode !== process.env.AUTH_CODE) throw new UnauthorizedException();

    const picture = await this.prisma.picture.create({
      data: createGalleryDto,
    });
    return picture;
  }

  async findAll() {
    const images = await this.prisma.picture.findMany();

    return images;
  }

  findOne(id: number) {
    return `This action returns a #${id} gallery`;
  }

  update(id: number, updateGalleryDto: UpdateGalleryDto) {
    return `This action updates a #${id} gallery`;
  }

  remove(id: number) {
    return `This action removes a #${id} gallery`;
  }
}

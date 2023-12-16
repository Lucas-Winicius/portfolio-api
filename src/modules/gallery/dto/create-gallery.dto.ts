import { IsUrl, IsNotEmpty } from 'class-validator';

export class CreateGalleryDto {
  id?: string;

  @IsNotEmpty()
  title: string;

  @IsUrl()
  url: string;

  createdAt?: Date;
  updatedAt?: Date;
}

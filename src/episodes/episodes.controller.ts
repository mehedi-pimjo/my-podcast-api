import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll() {
    return "All episodes";
  }

  @Get("featured")
  findFeatured() {
    return "Featured episodes";
  }

  @Post()
  create() {
    return "New episode";
  }
}

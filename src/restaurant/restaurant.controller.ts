import { Body, Controller, Post,Get, Param, Patch, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {
   }
   @Post()
   createRestruant(@Body() restarunt: any){
    return this.restaurantService.createRestruant(restarunt);
   }

    @Get() 
    getAllRestraunts(){
      return this.restaurantService.getAllRestraunts();
    }

    @Get(':id')
    getRestrauntById(@Param('id') id :string ){
      return this.restaurantService.getRestrauntById(+id);
    }


    @Patch(':id')
    updateRestaruntById(@Param('id') id :string,@Body() restrauntData ){
      return this.restaurantService.updateRestrunatById(+id ,restrauntData);
    }
     
    @Delete(':id')
    deleteRestaurantById(@Param('id') id:string){
      return this.restaurantService.deleteRestaurantById(+id);
    }


}


/// <reference path="../services/cars.service.ts" />
import { Component } from "@angular/core";
import { CarsService } from '../services/cars.service';

@Component({
    selector: 'of-car',
    templateUrl: './app/cars.component/cars.component.html',
    styleUrls: ['./app/Cars.Component/Cars.Component.css'],
    providers: [CarsService]

})
export class CarsComponent {
    private carImages: any [];
   
    constructor(private _carsService: CarsService) {

    }

    ngOnInit() {
        this.getCarImages();
        
    }
    getCarImages() {
        this._carsService.getCarImages().subscribe(
            response => this.carImages = response,
            error => console.error(error),
            () => console.info(this.carImages)
        );

    }
  
}

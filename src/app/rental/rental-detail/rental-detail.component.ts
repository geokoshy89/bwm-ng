import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RentalService} from '../shared/rental.service';
import {Rental} from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental:Rental;
  constructor(private activatedRoute:ActivatedRoute,
    private rentalService:RentalService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
       this.getRental(params['rentalId']);
      }
    )
  }
  getRental(rentalId:string){
    this.rentalService.getRentaById(rentalId)
    .subscribe((rental:Rental)=>{
      this.rental=rental;
    });
  }

  get rentalLocation(): string {
     return `${this.rental.city}, ${this.rental.street}`
   }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent  {

  position = {
    lat: 19.39801598306256,
    lng:  -99.17148738983772
  };

  label = {
    color: 'blue',
    text: 'Turing-IA'
  };
  constructor() { }

   ngOnInit(): void {
   }
  
}

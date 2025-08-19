import { Component, Input } from '@angular/core';
import { type ResultModel } from './investment-result.model';

@Component({
  selector: 'app-investment-result',
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {

  @Input({required: true}) outputData!: ResultModel[]; 
  

  

}

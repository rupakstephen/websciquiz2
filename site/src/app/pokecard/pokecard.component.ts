import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {

  constructor() { }

  @Input() pokedata:any;

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges): void{
  }

}

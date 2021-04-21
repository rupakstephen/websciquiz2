import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mini-Pokedex';

  constructor(public api:ApiService) {}
  start = 1;
  end = 5;
  pokemon:Array<any> = [];
  finished = false;
  beginning = false;


  async ngOnInit(){
    this.pokemon = [];
    for(let i = this.start;i < this.end+1;i++){
      await this.callApi(i);
    }
    console.log(this.pokemon)
    this.finished = true;
  }

  async callApi(i:number):Promise<any>{
    this.api.apicall("GET",`getPokemon/${i}`,null).subscribe((data:any)=>{
      this.pokemon.push(data);
    })
  }

  nextFive(){
    this.start += 5;
    this.end += 5;
    this.ngOnInit()
    if(this.start != 1){
      this.beginning = true;
    }
  }

  prevFive(){
    this.start -= 5;
    this.end -= 5;
    this.ngOnInit();
    if(this.start == 1){
      this.beginning = false;
    }
  }


}

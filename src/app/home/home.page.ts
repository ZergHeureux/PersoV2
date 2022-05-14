import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.turnDisc();
  }
  index = 0;
  isPlayingMusic = true;
  hasTurned = 1;
  page = ["home","about"]

  playMusic(){
    if (this.isPlayingMusic) this.isPlayingMusic=false;
    else {this.isPlayingMusic=true;this.turnDisc();}
    console.log(this.isPlayingMusic);
  }
  turnDisc(){
    var d = document.getElementById("disque");
    if (d) d.style.transform = "rotate("+this.hasTurned*5+"deg)";
    this.hasTurned++;
    if (this.isPlayingMusic) setTimeout(()=>{this.turnDisc()},50)
    
  }
  checkIndex(){
    if (this.index==0)document.getElementById("navPrev").style.display="none"
    else document.getElementById("navPrev").style.display="block"
    if (this.index==this.page.length-1)document.getElementById("navNext").style.display="none"
    else document.getElementById("navNext").style.display="block"
    this.page.forEach((elt)=>{
      document.getElementById(elt).style.display="none"
    });
    document.getElementById(this.page[this.index]).style.display="block";
  }
  nextPage() {
    this.index++;
    console.log(this.index)
    this.checkIndex();
  }
  prevPage() {
    this.index--;
    console.log(this.index)
    this.checkIndex();
  }

}

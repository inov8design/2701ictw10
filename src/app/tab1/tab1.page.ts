import { Component,OnInit } from '@angular/core';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
imageFile:string;

  constructor(private storage:Storage) {}

  ngOnInit(){

  }
ionViewDidEnter(){

  this.storage.get('image1').then(val => {
    this.imageFile = val;
    });
}
  imageSelected(files){
  if (files.length > 0) {
    alert("imageSelected: " + files[0].name);
  
    }
    let fileReader = new FileReader();

    fileReader.readAsDataURL(files[0]);

    fileReader.onload = e => {
      
      this.imageFile = fileReader.result as string;
      this.storage.set('image1', this.imageFile);
    };
    
}
}
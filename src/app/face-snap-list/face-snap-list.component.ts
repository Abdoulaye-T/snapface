import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    HeaderComponent,
    FaceSnapComponent
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[]

  ngOnInit() {
    this.faceSnaps = [
      new FaceSnap(
        'Archibald',
        'La nature pure !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0
      ),
      new FaceSnap(
        'Oursin',
        'Une illustration d\'un petit oursin',
        'https://i.pinimg.com/236x/6a/0a/59/6a0a591a69a43d7878b1085d45b6f0ab.jpg',
        new Date(),
        5
      ),
      new FaceSnap(
        'Trophée CUP Intercontinental',
        'Kylian M\'Bappe avec la coupe Intercontinentale!',
        'https://i.pinimg.com/originals/64/aa/7c/64aa7c0d4f0a656158907f2d8492cc09.jpg',
        new Date(),
        150
      )
    ]
    
    this.faceSnaps[1].setLocation('à la montagne');
  }
}

import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { snapType } from "../models/snap-type.type";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Naruto Uzumaki',
      'Illustration !',
      'https://i.pinimg.com/474x/35/aa/f0/35aaf08c02d37d571e2237b209dd8824.jpg',
      new Date(),
      0
    ).withLocation('au village caché de Konoha'),
    new FaceSnap(
      'nature',
      'La nature pure !',
      'https://i.pinimg.com/236x/07/c1/d9/07c1d9df7f04c480a011091e6d1e6f3b.jpg',
      new Date(),
      0
    ).withLocation('dans la forêt'),
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
    ).withLocation('à la plage'),
    new FaceSnap(
      'Trophée CUP Intercontinental',
      'Kylian M\'Bappe avec la coupe Intercontinentale!',
      'https://i.pinimg.com/originals/64/aa/7c/64aa7c0d4f0a656158907f2d8492cc09.jpg',
      new Date(),
      150
    ).withLocation('au stade')
  ]

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: snapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}
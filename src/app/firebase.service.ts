import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  // Add anime card to Firebase
  addAnimeCard(anime: any) {
    return this.firestore.collection('anime').add(anime);
  }

  // Get anime list from Firebase
  getAnimeList(): Observable<any[]> {
    return this.firestore.collection('anime').valueChanges();
  }

  // Delete anime card from Firebase
  deleteAnimeCard(id: string) {
    return this.firestore.collection('anime').doc(id).delete();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { AnimeAddComponent } from '../anime-add/anime-add.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  standalone: true,
  imports: [MatCardModule, NgFor, NgIf, AnimeAddComponent],
  styleUrls: ['./anime-list.component.css'],
})
export class AnimeListComponent implements OnInit {
  animeList: any[] = [];
  selectedAnime: any = null;

  // Load anime list from localStorage when the component initializes
  ngOnInit() {
    const savedAnimeList = localStorage.getItem('animeList');
    if (savedAnimeList) {
      this.animeList = JSON.parse(savedAnimeList);
    } else {
      // If no data in localStorage, use the default list
      this.animeList = [
        {
          id: 1,
          name: 'One Piece',
          rate: 9.2,
          state: 'Ongoing',
          image: 'https://images.justwatch.com/poster/248497985/s718/one-piece-1999.jpg',
          description: 'The journey of Luffy and his pirate crew to find the One Piece.',
        },
        {
          id: 2,
          name: 'Jujutsu Kaisen',
          rate: 8.9,
          state: 'Ongoing',
          image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/e4e80c83c792d81c138e320874dbdffc.jpe',
          description: 'Yuji Itadori joins the fight against curses to save humanity.',
        },
        // Add your other default anime data here...
      ];
    }
  }

  // Method to handle the addition of a new anime
  onAnimeAdded(newAnime: any) {
    this.animeList.push({
      ...newAnime,
      id: this.animeList.length + 1, // Generate a unique id
    });

    // Save the updated anime list to localStorage
    localStorage.setItem('animeList', JSON.stringify(this.animeList));
  }

  // Method to delete an anime from the list
  deleteAnime(animeId: number) {
    // Remove the anime from the animeList based on its ID
    this.animeList = this.animeList.filter(anime => anime.id !== animeId);

    // Save the updated list to localStorage
    localStorage.setItem('animeList', JSON.stringify(this.animeList));
  }

  // Method to select an anime for details
  selectAnime(anime: any) {
    this.selectedAnime = anime;
  }

  // Method to close the details view
  closeDetails() {
    this.selectedAnime = null;
  }
}

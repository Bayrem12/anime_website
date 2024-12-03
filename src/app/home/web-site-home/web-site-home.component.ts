import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-web-site-home',
  standalone: true,
  imports: [NgFor,CarouselModule,MatCardModule],
  templateUrl: './web-site-home.component.html',
  styleUrl: './web-site-home.component.css'
})
export class WebSiteHomeComponent {
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  featuredAnime = [
    { title: 'Attack on Titan', image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg' },
    { title: 'Demon Slayer', image: 'https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=480,height=720/catalog/crunchyroll/765ee047befcfb677d169f5de4c82d5c.jpg' },
    { title: 'Jujutsu Kaisen', image: 'https://comenian.org/wp-content/uploads/2024/01/unnamed-87.png' }
  ];

  latestReleases = [
    { title: 'One Piece', image: 'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', description: 'Episode 1000 released!' },
    { title: 'My Hero Academia', image: 'https://preview.redd.it/my-hero-academia-season-7-key-visual-v0-pky1ul99fh5c1.jpg?auto=webp&s=09b8952d22b89d31e9a4b9fce132cb6f29f40cad', description: 'Season 7 premieres.' }
  ];

  popularAnime = [
    { title: 'Naruto', image: 'https://m.media-amazon.com/images/M/MV5BNTk3MDA1ZjAtNTRhYS00YzNiLTgwOGEtYWRmYTQ3NjA0NTAwXkEyXkFqcGc@._V1_.jpg' },
    { title: 'Dragon Ball', image: 'https://m.media-amazon.com/images/M/MV5BYTgyMzA5MjEtNDY3Ny00ZDkyLWJhYzEtYzI2Nzk5Mzc3ZDk1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' },
    { title: 'Death Note', image: 'https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_.jpg' }
  ];


}

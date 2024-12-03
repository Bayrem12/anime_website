import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-anime-news',
  standalone: true,
  imports: [NgFor],
  templateUrl: './anime-news.component.html',
  styleUrl: './anime-news.component.css'
})
export class AnimeNewsComponent {
  newsList = [
    {
      title: 'Attack on Titan Final Season Update',
      description: 'The epic conclusion to Attack on Titan is here!',
      image: 'https://www.hindustantimes.com/ht-img/img/2023/04/10/1600x900/175229-attack-on-titan-webp-large_1681099848276_1681099859239_1681099859239.jpg',
      date: 'November 30, 2024',
    },
    {
      title: 'One Piece Live-Action Season 2 Confirmed',
      description: 'Netflix confirms the second season of the One Piece live-action series.',
      image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-72522,resizemode-75,msid-107032932/news/international/us/one-piece-live-action-season-2-netflix-whats-in-store-for-luffy-and-crew-release-date-cast-and-story-revealed.jpg',
      date: 'December 1, 2024',
    },
    {
      title: 'Demon Slayer Movie Release',
      description: 'New Demon Slayer movie is set to hit theaters next month.',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/demon-slayer-infinity-castle-movie.jpg',
      date: 'December 5, 2024',
    },
    {
      title: 'Jujutsu Kaisen: Season 3 Announced',
      description: 'Studio MAPPA confirms Jujutsu Kaisen season 3 for next year.',
      image: 'https://beebom.com/wp-content/uploads/2024/06/JJK-Season-3.jpg?w=1250&quality=75',
      date: 'December 10, 2024',
    },
    {
      title: 'Bleach Thousand-Year Blood War Part 3',
      description: 'Bleach returns with part 3 of the Thousand-Year Blood War arc.',
      image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6bb4dbc0-b71c-460a-8d65-b9b0ca5766dd_1200x675.png',
      date: 'December 15, 2024',
    },
    {
      title: 'My Hero Academia: New Movie Announced',
      description: 'A new My Hero Academia movie is in production for 2025.',
      image: 'https://comicbook.com/wp-content/uploads/sites/4/2024/07/4351db35-9bfd-4d01-99b3-ac3744886dbd.png',
      date: 'December 20, 2024',
    },
    {
      title: 'Sword Art Online Progressive: Next Film Revealed',
      description: 'Sword Art Online Progressive continues with a new movie installment.',
      image: 'https://i0.wp.com/jaybarnson.com/wp-content/uploads/2022/01/SAOProgressive2.jpg?fit=730%2C400&ssl=1',
      date: 'December 25, 2024',
    },
    {
      title: 'Chainsaw Man Season 2 Teaser Trailer',
      description: 'Chainsaw Man season 2 teaser trailer takes the internet by storm.',
      image: 'https://beebom.com/wp-content/uploads/2022/12/Chainsaw-Man-Season-2-What-to-Expect.jpg?w=750&quality=75',
      date: 'January 5, 2025',
    },
    {
      title: 'Black Clover Movie: Release Date Announced',
      description: 'The Black Clover movie gets an official release date.',
      image: 'https://sm.ign.com/ign_in/screenshot/default/enus-blackclover-main-vertical-rgb-pre_rtsf.jpg',
      date: 'January 10, 2025',
    },
    {
      title: 'Tokyo Revengers: Season 2 Premiere',
      description: 'Tokyo Revengers returns with a brand-new season next month.',
      image: 'https://staticg.sportskeeda.com/editor/2022/12/a7497-16721455750617-1920.jpg',
      date: 'January 15, 2025',
    },
  ];
}

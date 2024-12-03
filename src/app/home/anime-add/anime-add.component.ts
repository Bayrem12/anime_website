import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-anime-add',
  templateUrl: './anime-add.component.html',
  styleUrls: ['./anime-add.component.css'],
  standalone: true,
  imports: [FormsModule],
 
})
export class AnimeAddComponent {
  newAnime = {
    name: '',
    image: '',
    state: '',
    description: '',
    rate: null as number | null,
  };

  @Output() animeAdded = new EventEmitter<any>();

  onSubmit() {
    if (this.newAnime.name && this.newAnime.image && this.newAnime.state && this.newAnime.description && this.newAnime.rate) {
      this.animeAdded.emit(this.newAnime);
      this.newAnime = { name: '', image: '', state: '', description: '', rate: null };
    } else {
      alert('Please fill all the fields!');
    }
  }
}

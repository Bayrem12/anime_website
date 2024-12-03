import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters = [
    { name: 'Naruto Uzumaki', image: 'https://i.pinimg.com/originals/32/32/6a/32326add6169e8f92ce30af564a8e59f.jpg' },
    { name: 'Monkey D. Luffy', image: 'https://imgcdn.stablediffusionweb.com/2024/9/11/84d84d7b-93a0-4676-92c0-72374abd1bd2.jpg' },
    { name: 'Goku', image: 'https://rukminim2.flixcart.com/image/850/1000/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=20&crop=false' },
    { name: 'Sasuke Uchiha', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8074b88-7839-4cb6-8ee4-6920d3405aac/df1innp-812c3dbd-588e-419b-9f21-abd61895169c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4MDc0Yjg4LTc4MzktNGNiNi04ZWU0LTY5MjBkMzQwNWFhY1wvZGYxaW5ucC04MTJjM2RiZC01ODhlLTQxOWItOWYyMS1hYmQ2MTg5NTE2OWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1GqhafnmUWHl0Yej14rDfR89AoWbjpmYnqFEf_OXo_U' },
    { name: 'Ichigo Kurosaki', image: 'https://i.pinimg.com/originals/4d/10/eb/4d10eb4d81723343bfc7e3f9dac8f9aa.jpg' },
    { name: 'Levi Ackerman', image: 'https://i.pinimg.com/736x/f7/09/b4/f709b4ea6775642cf0ca6c5d3f670abc.jpg' },
    { name: 'Eren Yeager', image: 'https://i.pinimg.com/736x/de/c1/9b/dec19b0624a1214d76cb2013745edc14.jpg' },
    { name: 'Edward Elric', image: 'https://ih1.redbubble.net/image.5254129768.9808/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg' },
    { name: 'Roronoa Zoro', image: 'https://i.pinimg.com/736x/de/a2/d6/dea2d69ad49802076c5a81dce804c67c.jpg' },
    { name: 'Saitama', image: 'https://i.pinimg.com/736x/8a/c4/00/8ac40012c6052c4c24e26118073ea228.jpg' },
    { name: 'Tanjiro Kamado', image: 'https://static.wixstatic.com/media/7b3aea_08da29ada7174efb97ce01409ad2f569~mv2.png/v1/fit/w_320,h_320,q_90/7b3aea_08da29ada7174efb97ce01409ad2f569~mv2.png' },
    { name: 'Nezuko Kamado', image: 'https://rukminim2.flixcart.com/image/850/1000/kpu3frk0/poster/8/d/b/large-nezuko-kamado-wall-sticker-poster-selfadhesive-anime-original-imag3zkfzxcpyys7.jpeg?q=90&crop=false' },
    { name: 'Killua Zoldyck', image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/17138a64-1d68-4e0b-a7be-2d25ef3a6e30/width=450/d1a98d4c03c28991a9611217085246cf9991bfe8680542e84f524e074e9bf771_ponyDiffusionV6XL_v6StartWithThisOne.jpeg' },
    { name: 'Gon Freecss', image: 'https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/00cc5809-e251-4ef7-bbd2-20535da8f21a/width=450/FWKFJ1QQJ3NSZ8N4W6QJF7MP90.jpeg' },
    { name: 'Light Yagami', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFfnsNK-gkCVor9gmuhifrzJ2PR6SqM4IkeQ&s' },
    { name: 'Rem', image: 'https://i.pinimg.com/originals/26/07/08/2607088af561811deeb3f9cceff5a696.jpg' },
    { name: 'Zero Two', image: 'https://static.wikitide.net/greatcharacterswiki/5/53/Zero_Two.jpg' },
    { name: 'Shoto Todoroki', image: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/08/mha-shoto-todoroki-(1).jpg' },
    { name: 'Natsu Dragneel', image: 'https://cdn.talkie-ai.com/image_gen/2024-06-11/386e9ca9-994e-4bf1-b720-6a28a5151e72-5-400x0.webp' },
    { name: 'Hinata Shoyo', image: 'https://i.pinimg.com/originals/89/b7/9e/89b79e56132050d65eabdb4d8faa3374.jpg' },
  ];
  

}

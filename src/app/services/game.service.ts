import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Game[] = [
    {
      id: 1,
      name: 'The Legend of Zelda: Breath of the Wild',
      description:
        'The Legend of Zelda: Breath of the Wild is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. It is the 19th release in the main The Legend of Zelda series.',
      imageUrl:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      releaseDate: new Date('2017-03-03'),
    },
    {
      id: 2,
      name: 'Grand Theft Auto V',
      description:
        "Grand Theft Auto V is an action-adventure game developed by Rockstar North and published by Rockstar Games. It is the first main entry in the Grand Theft Auto series since 2008's Grand Theft Auto IV.",
      imageUrl:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      releaseDate: new Date('2013-09-17'),
    },
    {
      id: 3,
      name: 'The Witcher 3: Wild Hunt',
      description:
        'The Witcher 3: Wild Hunt is an action role-playing game developed and published by CD Projekt. It is the third main installment in The Witcher series, and is set in a fictional fantasy world inspired by Polish folklore.',
      imageUrl:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      releaseDate: new Date('2015-05-19'),
    },
    {
      id: 4,
      name: 'Portal 2',
      description:
        'Portal 2 is a puzzle-platform game developed and published by Valve Corporation. It is the sequel to Portal (2007) and was released on April 19, 2011, for Microsoft Windows, OS X, Linux, PlayStation 3, and Xbox 360.',
      imageUrl:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      releaseDate: new Date('2011-04-19'),
    },
    {
      id: 5,
      name: 'The Last of Us Part II',
      description:
        "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4. It is the sequel to 2013's The Last of Us and follows Ellie as she seeks revenge against those responsible for a tragedy.",
      imageUrl:
        'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg',
      releaseDate: new Date('2020-06-19'),
    },
  ];

  constructor() {}

  getGames(): Game[] {
    return this.games;
  }
}

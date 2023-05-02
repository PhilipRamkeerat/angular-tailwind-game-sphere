import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent {
  games: any[] = [];

  constructor(private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.games = this.gameService.getGames();
  }

  goToGameDetail(id: number) {
    this.router.navigate(['/games', id]);
  }
}

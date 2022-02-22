import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-deletegame',
  templateUrl: './deletegame.component.html',
  styleUrls: ['./deletegame.component.css']
})
export class DeletegameComponent implements OnInit {
  @Input() indexInput: any;
  game: any;
  id: any;
  constructor(private router: Router, private activateRouter: ActivatedRoute, private gamesService: GamesService) {

    this.activateRouter.params.subscribe(data => {
      this.id = data['id'];
      this.gamesService.getGamev2(this.id).subscribe(resp => {
        let data: any = resp;
        this.game = data.mensaje;
      });
    });
  }

  ngOnInit(): void {
  }


  borrar() {
    //console.log(`Borrando: ${this.game}`)
    this.gamesService.deleteGame(this.id).subscribe(respuesta => {
      console.log(respuesta)
    })
    this.router.navigate([''])
  }
}

import { Component } from '@angular/core';
import { Tache } from '../shared/interfaces/tache';
import { TacheService } from '../shared/service/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addtache',
  templateUrl: './addtache.component.html',
  styleUrl: './addtache.component.css',
})
export class AddtacheComponent {
  tache = {} as Tache;
  constructor(private tacheService: TacheService, private route: Router) {}

  addTache() {
    this.route.navigate(['../taches']);
    this.tacheService.addTache(this.tache);
  }
}

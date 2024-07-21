import { Component } from '@angular/core';
import { Tache } from '../shared/interfaces/tache';
import { TacheService } from '../shared/service/tache.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrl: './taches.component.css',
})
export class TachesComponent {
  tache = {} as Tache;
  taches: Tache[] = [];
  constructor(private tacheService: TacheService) {
    this.taches = this.tacheService.getTaches();
  }

  addTache() {
    this.tacheService.addTache(this.tache);
    localStorage.setItem('tache', this.tache.titre);
    this.tache = {} as Tache;
  }

  deleteTache(id: number) {
    if (confirm('Voulez vous supprimer la tache')) {
      this.tacheService.deleteTache(id);
    }
  }
}

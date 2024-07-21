import { Injectable } from '@angular/core';
import { Tache } from '../interfaces/tache';

@Injectable({
  providedIn: 'root',
})
export class TacheService {
  taches: Tache[] = [];
  constructor() {}
  getTaches() {
    return this.taches;
  }

  addTache(tache: Tache) {
    this.taches.push(tache);
    console.table(this.taches);
  }

  deleteTache(id: number) {
    this.taches.splice(id, 1);
  }
}

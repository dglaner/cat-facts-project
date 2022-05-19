import { Component, OnInit } from '@angular/core';
import {CatFactsService} from "../../_services/cat-facts.service";

@Component({
  selector: 'app-cat',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss']
})
export class CatFactsComponent implements OnInit {
  catFacts: string[] = [];

  constructor(private catFactsService: CatFactsService) { }

  ngOnInit(): void {
    this.loadFacts(10);
  }

  loadFacts(amount: number): void {
    for (let i = 0; i < amount; i++) {
      this.catFactsService.getRandomCatFact().subscribe(fact =>
        this.catFacts.includes(fact) ? this.loadFacts(1) : this.catFacts.push(fact))
    }
  }

  onScrollDown() {
    this.loadFacts(1);
  }

  trackByFn(index: number, item: any) {
    return item;
  };
}

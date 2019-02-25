import {
  Component,
  OnInit,
  Input // <--- aggiungi questo
 } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit {
  @Input() name: string;
  //name: string; // <-- aggiunta la proprietà name
  constructor() { 
    this.name = 'Felipe'; // setta il nome nel costruttore
  }
  ngOnInit() {
  }
}
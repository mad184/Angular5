import { Component, Input, OnInit } from '@angular/core';

//generated by ng generate component artist-items

@Component({
  selector: 'app-artist-items',
  templateUrl: './artist-items.component.html'
})
export class ArtistItemsComponent implements OnInit {

  @Input() artist: any;

  constructor() { }

  ngOnInit(): void {
  }

}

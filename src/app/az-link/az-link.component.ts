import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-az-link',
  templateUrl: './az-link.component.html',
  styleUrls: ['./az-link.component.css']
})
export class AzLinkComponent implements OnInit {

  links: string[] = [];

  constructor() { }

  ngOnInit() {
    this.links = ['a', 'b'];
  }

}

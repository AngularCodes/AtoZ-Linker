import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-az-link',
  templateUrl: './az-link.component.html',
  styleUrls: ['./az-link.component.css']
})
export class AzLinkComponent implements OnInit {

  links: string[] = [];
  baseUrl: string;

  constructor() { }

  ngOnInit() {
    this.baseUrl = "baseUrl";

    for (let i = 0; i < 25; i++) {
      this.links[i] = String.fromCharCode(i + 65);
    }
  }

}

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected login: string;
  protected password: string;
  protected error: any;

  constructor() {
  }

  ngOnInit() {
  }

}

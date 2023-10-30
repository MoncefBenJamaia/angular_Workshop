import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;

  constructor(private avtR: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParam();
  }

  getParam() {
    this.avtR.paramMap.subscribe(data => {
      this.id = Number(data.get('id'));
    });
  }

}

import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-fils-user',
  templateUrl: './fils-user.component.html',
  styleUrls: ['./fils-user.component.css']
})
export class FilsUserComponent {
@Input() Rfp!: number;
@Input() item !: User;

@Output() sender = new EventEmitter<number>();

send(id: number){
  this.sender.emit(id);
}
showCurrentUser(){
  alert(this.item.firstName);
}
}

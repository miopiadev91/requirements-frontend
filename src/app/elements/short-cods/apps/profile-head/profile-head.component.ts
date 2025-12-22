import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-head',
  standalone: true,
  imports: [],
  templateUrl: './profile-head.component.html',
  styleUrl: './profile-head.component.css'
})
export class ProfileHeadComponent {

  @Input() profileDetail:any = '';
  name:string = '';
  email:string = '';
  ngOnInit(){
    this.name = this.profileDetail.name;
    this.email = this.profileDetail.email;
  }

}

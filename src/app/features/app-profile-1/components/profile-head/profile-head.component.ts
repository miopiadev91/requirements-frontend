import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { AuthService } from '../../../../features/auth/services/auth.service';

@Component({
  selector: 'app-profile-head',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './profile-head.component.html',
  styleUrl: './profile-head.component.css'
})
export class ProfileHeadComponent {

  public authService = inject(AuthService)


  @Input() profileDetail:any = '';
  name:string = '';
  email:string = '';
  ngOnInit(){
    this.name = this.profileDetail.name;
    this.email = this.profileDetail.email;
  }

}

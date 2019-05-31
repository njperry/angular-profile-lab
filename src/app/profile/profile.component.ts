import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../profile-service';
import { ProfileServiceService } from '../profile-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userProfile: any;

  constructor(private profileService: ProfileServiceService, private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getProfile();
  }

  editProfile(): void {
    this.router.navigate(['/edit']);
  }

}

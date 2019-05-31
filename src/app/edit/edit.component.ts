import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userProfile: any;

  constructor(private profileService: ProfileServiceService, private router: Router) { }

  ngOnInit() {
    this.userProfile = this.profileService.getProfile();
  }
  //get user profile from service here

  saveProfile(userProfile: any) {
    console.log(userProfile);
    this.profileService.setUserProfile();
  }

  returnToProfile(): void { //redirects the user, to the /profile route.
    this.router.navigate(['/profile']);
  }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  userProfile: any =
    { 
      name: "Nick", 
      contactinfo: "nick@gmail.com", 
      bio: "The Dude Abides" 
    }
  
  updatedProfile: any;

  
  constructor(private router: Router) { }

  getProfile(): any {
    console.log(this.userProfile);
    return this.userProfile;
  }

  setUserProfile() { //sets the profile object with data.
    return this.updatedProfile;
  }

  editProfile(): void { //redirects the user, to the /edit-profile route.
    this.router.navigate(['/edit']);
  }

  returnToProfile(): void { //redirects the user, to the /profile route.
    this.router.navigate(['/profile']);
  }

}

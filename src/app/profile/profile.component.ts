import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';
// import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile;
   repos;


  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile => {
          console.log(profile);
          this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(repos => {
      console.log();
      this.repos = repos;
    });
  }

  ngOnInit(): void {
  }

}

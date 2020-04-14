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
   repos: any[];


  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile => {
          console.log(profile);
          this.profile = profile;
    });
    this.profileService.getProfileRepos().subscribe(profile => {
      console.log();
      this.repos = this.repos;
    });
  }

  ngOnInit(): void {
  }

}

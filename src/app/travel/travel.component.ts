import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ForseekerService } from '../forseeker.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css'],
})
export class TravelComponent implements OnInit {
  constructor(
    private router: Router,
    private activeroute: ActivatedRoute,
    private seekerservie: ForseekerService
  ) {}
  username: any;
  activeTab = 'travel';

  travelName: string = '';
  travelEmail: string = '';
  claimType: string = '';
  claimAmount: number = 0;

  submitTravelDetails() {
    console.log('Submitting travel details...');
    console.log('Name:', this.travelName);
    console.log('Email:', this.travelEmail);
  }

  submitClaimDetails() {
    console.log('Submitting claim details...');
    console.log('Claim Type:', this.claimType);
    console.log('Claim Amount:', this.claimAmount);
  }
  ngOnInit() {
    this.username = localStorage.getItem('currentemployee');
  }
  logoutemployee() {
    this.seekerservie.logout();
    this.router.navigate(['login/emp_login']);
  }
  jobs() {
    this.router.navigate(['jobs'], { relativeTo: this.activeroute });
  }
  appliedjobs() {
    this.router.navigate(['appliedjobs'], { relativeTo: this.activeroute });
  }
  gotoprofilepage() {
    this.router.navigate(['seeker/eprofile']);
  }
}

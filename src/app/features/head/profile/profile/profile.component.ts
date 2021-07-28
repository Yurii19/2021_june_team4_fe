import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/shared/interfaces';
import { ProfileService } from 'src/app/core/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  //categoryAddRemove: string[] = ['COMMON.Global.add', 'COMMON.Global.remove'];

  user$: Observable<IUser>;

  tabs: [
    { tabName: string; path: string; isActive: boolean },
    { tabName: string; path: string; isActive: boolean },
    { tabName: string; path: string; isActive: boolean }
  ] = [
    { tabName: 'History', path: 'history', isActive: true },
    { tabName: 'Favorites', path: 'favorite', isActive: false },
    { tabName: 'Active Discounts', path: 'active', isActive: false },
  ];

  constructor(private profile: ProfileService) {
    this.user$ = this.profile.getUser();
  }

  ngOnInit() {}
}

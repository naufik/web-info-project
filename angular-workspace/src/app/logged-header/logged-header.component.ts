import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../dataretriever.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logged-header',
  templateUrl: './logged-header.component.html',
  styleUrls: ['./logged-header.component.css'],
  providers: [ DataRetrieverService, AuthService ]
})
export class LoggedHeaderComponent implements OnInit {

  private dataRetriever: DataRetrieverService;
  private auth: AuthService;
  private router: Router;

  public user: any;

  constructor(ds: DataRetrieverService, as: AuthService, router: Router) {
    this.dataRetriever = ds;
    this.auth = as;
    this.router = router;
  }

  ngOnInit() {
    this.dataRetriever.getSessionData().then((data) => {
      console.log(data);
      this.user = data;
    });
  }

  logoutUser() {
    this.auth.logout().then((success) => {
      if (success) {
        this.router.navigate(['/']);
      }
    });
  }

}

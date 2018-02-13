import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService} from '../../_services/index';
import { User } from '../../_models/index';
import { Router, ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
  private router: Router,
  private route: ActivatedRoute
) { }

  loginService : ISubscription;

  model = new User();
  returnUrl: string;

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit()
  {
    this.loginService = this.authenticationService.login(this.model.email,this.model.password)
    .subscribe(
      data =>{
        this.router.navigate([this.returnUrl]);
      }, error =>{

      }
    );
  }

  ngOnDestroy() {
    this.loginService.unsubscribe();
  }

}

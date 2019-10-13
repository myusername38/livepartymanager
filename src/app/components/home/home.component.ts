import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { PartyService } from '../../services/party.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;
  loginError = '';
  loading = false;

  constructor(
    private snackbarService: SnackbarService,
    private partyService: PartyService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      keycode: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    try {
      this.loading = true;
      this.partyService.setParty(this.loginForm.getRawValue().keycode);
      console.log(this.loginForm.getRawValue().keycode);
      await this.partyService.getParty();
      this.router.navigate(['party']);
    } catch (err) {
      this.snackbarService.showError('Party does not exist', 'close');
    } finally {
      this.loading = false;
    }
  }
  hosting() {
    this.router.navigate(['/planners']);
  }

}

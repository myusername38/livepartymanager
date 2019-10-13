import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';
import { PartyService } from '../../../services/party.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-setup',
  templateUrl: './party-setup.component.html',
  styleUrls: ['./party-setup.component.scss']
})
export class PartySetupComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';
  loading = false;
  logedIn = false;
  addItemForm: FormGroup;

  constructor(
    private snackbarService: SnackbarService,
    private router: Router,
    private partyService: PartyService
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,  Validators.email]),
      password: new FormControl('', [Validators.required]),
      handle: new FormControl('', [Validators.required]),
      spotify: new FormControl(''),
    });
  }

  async onSubmit() {
    try {
      this.loading = true;
      await this.partyService.singup(
        this.loginForm.getRawValue().email, this.loginForm.getRawValue().password,
        this.loginForm.getRawValue().handle, this.loginForm.getRawValue().spotify);
      this.logedIn = true;
      this.addItemForm = new FormGroup({
        item: new FormControl(''),
      });
    } catch ({ message = 'Error authentication, please try again' }) {
      this.loginError = message;
      this.snackbarService.showError(message, 'Close');
    } finally {
      this.loading = false;
    }
  }

  async addItem() {
    try {
      const item = this.addItemForm.getRawValue().item;
      this.loading = true;
      await this.partyService.addItem(item);
      this.snackbarService.showError(`Item added!` , 'Close');
    } catch ({ message = 'Error authentication, please try again' }) {
      this.loginError = message;

    } finally {
      this.loading = false;
    }
  }

  help() {
    this.router.navigate(['planners/spotifyhelp']);
  }
  alert() {
    this.router.navigate(['planners/alerts']);
  }

}

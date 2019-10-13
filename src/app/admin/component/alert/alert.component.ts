import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SnackbarService } from '../../../services/snackbar.service';
import { PartyService } from '../../../services/party.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  loginForm: FormGroup;
  loginError = '';
  loading = false;
  alerts = [];
  partyId = null;

  constructor(
    private snackbarService: SnackbarService,
    private partyService: PartyService,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      keycode: new FormControl('', [Validators.required])
    });
  }

  async loadAlerts() {
    try {
      this.loading = true;
      this.alerts = await this.partyService.getAlerts();
    } catch ({ message = 'Error authentication, please try again' }) {
      this.loginError = message;
      this.snackbarService.showError(message, 'Close');
    } finally {
      this.loading = false;
    }
  }

  onSubmit() {
    this.partyService.setParty(this.loginForm.getRawValue().keycode);
    this.loadAlerts();
    this.partyId = true;
  }

}

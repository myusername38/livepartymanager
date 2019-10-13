import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  loginForm: FormGroup;
  loginError = '';
  loading = false;
  alerts = [
        { name: 'ITS DOLPH' },
        { name: 'ITS DOLPH' },
        { name: 'ITS DOLPH' },
        { name: 'ITS DOLPH' },
      ];

  constructor(
    private snackbarService: SnackbarService,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      keycode: new FormControl('', [Validators.required])
    });
  }

  async onSubmit() {
    try {
      this.loading = true;
    } catch ({ message = 'Error authentication, please try again' }) {
      this.loginError = message;
      this.snackbarService.showError(message, 'Close');
    } finally {
      this.loading = false;
    }
  }
}

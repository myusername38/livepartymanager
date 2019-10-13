import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;
  loginError = '';
  loading = false;

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

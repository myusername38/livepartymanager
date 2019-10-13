import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { SpotifyService } from '../../services/spotify.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  loginError = '';
  loading = false;
  loadingSong = false;
  currentSong = null;

  constructor(
    private snackbarService: SnackbarService,
    private spotifyService: SpotifyService,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      keycode: new FormControl('', [Validators.required])
    });
  }

  ngAfterViewInit(): void {
    if (this.spotifyService.getToken()) {
      this.setCurrentSong();
    }
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

  async setCurrentSong() {
    try {
      this.loadingSong = true;
      this.currentSong = await this.spotifyService.getCurrentSong();
      console.log(this.currentSong.item);
    } catch(err) {
      this.snackbarService.showInfo('error');
      // DO SOMETHING
    } finally {
      this.loadingSong = false;
    }
  }
}

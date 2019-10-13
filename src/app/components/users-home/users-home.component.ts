import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { SpotifyService } from '../../services/spotify.service';
import { PartyService } from '../../services/party.service';
import { Router } from '@angular/router';

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
  partyItems = [];
  constructor(
    private snackbarService: SnackbarService,
    private spotifyService: SpotifyService,
    private partyService: PartyService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      keycode: new FormControl('', [Validators.required])
    });
    this.setItems();
    if (!this.partyService.party) {
      this.router.navigate(['']);
    }
  }

  ngAfterViewInit(): void {
    if (this.spotifyService.getToken()) {
      this.setCurrentSong();
    }
  }
/*
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
*/
  async setCurrentSong() {
    try {
      this.loadingSong = true;
      const spotify = await this.partyService.getSpotify();
      console.log(spotify);
      this.currentSong = await this.spotifyService.getCurrentSong(spotify._fieldsProto.spotiy.stringValue);
      console.log(this.currentSong.item);
    } catch (err) {
      // DO SOMETHING
    } finally {
      this.loadingSong = false;
    }
  }
  async setItems() {
    try {
      this.loading = true;
      this.partyItems = await this.partyService.getParty();
      console.log(this.partyItems);
    } catch (err) {
      this.snackbarService.showInfo('error');
      // DO SOMETHING
    } finally {
      this.loadingSong = false;
    }
  }
  async alert(name: string, color: string) {
    try {
      await this.partyService.addAlert(name, color);
    } catch (err) {
      // DO SOMETHING
    } finally {
      this.snackbarService.showInfo('Thanks for Submitting an Alert');
    }
  }
  back() {
    this.partyService.party = null;
    this.router.navigate(['']);
  }
}

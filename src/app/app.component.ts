import { Component } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Live-Party-Manager-Frontend';

  constructor( private snackbar: SnackbarService) { }

  openSnackbar() {
    this.snackbar.showInfo('woah this works');
  }
}

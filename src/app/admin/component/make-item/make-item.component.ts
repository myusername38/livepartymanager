import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { SnackbarService } from '../../../services/snackbar.service';
import { PartyService } from '../../../services/party.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-item',
  templateUrl: './make-item.component.html',
  styleUrls: ['./make-item.component.scss']
})
export class MakeItemComponent implements OnInit {

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
    this.addItemForm = new FormGroup({
      item: new FormControl(''),
    });
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

  alert() {
    this.router.navigate(['planners/alerts']);
  }
}

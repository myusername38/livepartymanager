import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class PartyService {
  partyURL = 'https://us-central1-livepartytracker.cloudfunctions.net/api';
  party: string = null;

  constructor(private http: HttpClient) { }

  setParty(party: string) {
    this.party = party;
  }

  addItem(item: string): Promise<any> {
    return this.http.post(`${ this.partyURL }/post-item`, { party: this.party, item }).toPromise();
  }

  getAlerts(): Promise<any> {
    return this.http.post(`${ this.partyURL }/get-alerts`, {party: this.party}).toPromise();
  }

  getParty(): Promise<any> {
    return this.http.post(`${ this.partyURL }/get-party`, {party: this.party}).toPromise();
  }
  addAlert(name: string, color: string) {
    return this.http.post(`${ this.partyURL }/post-alerts`, {name, color, party: this.party}).toPromise();
  }
  singup(email: string, password: string, partycode: string, spotify: string) {
    this.party = partycode;
    return this.http.post(`${ this.partyURL }/signup`, {email, password, partycode, spotify }).toPromise();
  }
  async getSpotify(): Promise<any> {
    return this.http.post(`${ this.partyURL }/get-spotify`, {party: this.party}).toPromise();
 }
}

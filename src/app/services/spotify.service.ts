import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyToken: string = 'BQD_TJ7ErMAUGUh5uFIRzZHluknj-kxpC-Om5y3GjX6fO0HWcudMeN1yY7u9penJaEWywHb17-NYkVbFdRBfJlAT3dXs_hONsJd2v7faRg0kyHRdEeYeU-4zNWnf5c4zlYIXQ1q2M_NIlnoxBnRDFAo';

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    this.spotifyToken = token;
  }
  getToken(){
    return this.spotifyToken;
  }
  async getCurrentSong(): Promise<any> {
    if (!this.spotifyToken) {
      return;
    }
    return this.http.get(`https://api.spotify.com/v1/me/player/currently-playing`,
    { headers: { Accept : 'applicationn/json', Authorization: `Bearer ${ this.spotifyToken }` }}).toPromise();
  }

}

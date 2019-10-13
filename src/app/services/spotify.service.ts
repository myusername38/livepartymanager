import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyToken: string = 'BQAI-Q7gk8FiL63gQDZH1kOD3-IchpAOwe-4KHblVV4OhCQ0b0dO5LV2ZIsxgkFXnh22kkwMAHxhGzR21zYS9ytouiKbTMu1dFAeDPJRYAjDzV1xaOIQEabObvttDfYq-n6uZso7_xlDsQxpWZIhNe8';

  constructor(private http: HttpClient) { }

  setToken(token: string) {
    this.spotifyToken = token;
  }
  getToken(){
    return this.spotifyToken;
  }
  async getCurrentSong(token: string): Promise<any> {
    if (!this.spotifyToken) {
      return;
    }
    return this.http.get(`https://api.spotify.com/v1/me/player/currently-playing`,
    { headers: { Accept : 'applicationn/json', Authorization: `Bearer ${ token }` }}).toPromise();
  }




}

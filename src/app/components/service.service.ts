import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peliculas, Peli } from '../Musicservices/interfaces/pelicula.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _searchRecord: string[] = [];
  public results: Peli[] = [];
  public resultsid: any = [];
  get searchRecord() {
    return this._searchRecord;
  }
  constructor(private http: HttpClient) {
    if (localStorage.getItem('record') && localStorage.getItem('lastResults')) {
      this._searchRecord = JSON.parse(localStorage.getItem('record')!);
      this.results = JSON.parse(localStorage.getItem('lastResults')!);
    }

  }
  apiKey = environment.apiKey;
  apiUrl = environment.apiUrl;
  searchPeliculas() {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'en-US')
      .set('page', 1.);
    localStorage.setItem('record', JSON.stringify(this._searchRecord));
    this.http.get<Peliculas>(`${this.apiUrl}/top_rated`, { params })
      .subscribe((resp: Peliculas) => {
        console.log(resp.results);
        this.results = resp.results;
        localStorage.setItem('lastResults', JSON.stringify(this.results));
      })
    console.log(this._searchRecord);
  }

  searchMoviebyId(id: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'en-US');
    this.http.get<any>('https://api.themoviedb.org/3/movie/278?api_key=bdcbf8252bf651e226e32a09a5d32b3c')
      .subscribe((resp: any) => {
        console.log(resp.results);
        this.resultsid = resp.results;
      })
    console.log(this.resultsid);
    return this.resultsid;
  }

}

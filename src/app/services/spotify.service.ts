import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery( query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAcIJ-eSvogSMj-Byr8YwBDJmQJPCbEgD7OCG7jgc8SLvliriDTNw3JraX1yFrjcv7x0WZKlJ61FrgyGC8'
    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB7KY1_Xq69_B9Xn0iZheQ26vDEueF6A9bMiwSCw2GnpVTsGLAECIk38gOnG0TRLRN1pmMmxOC-06qzMW8'
    // });

    return this.getQuery('browse/new-releases')
                .pipe( map( data =>  data['albums'].items));

    // return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    //                 .pipe( map( data =>  data['albums'].items));
  }



  getArtistas(termino: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB7KY1_Xq69_B9Xn0iZheQ26vDEueF6A9bMiwSCw2GnpVTsGLAECIk38gOnG0TRLRN1pmMmxOC-06qzMW8'
    // });

    return this.getQuery(`search?q=${termino}&type=artist&market=US&limit=15&offset=5`)
                .pipe( map( data => data['artists'].items));


    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=US&limit=15&offset=5`, { headers })
    //                 .pipe( map( data => data['artists'].items));
  }

  getArtista( id: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB7KY1_Xq69_B9Xn0iZheQ26vDEueF6A9bMiwSCw2GnpVTsGLAECIk38gOnG0TRLRN1pmMmxOC-06qzMW8'
    // });

    return this.getQuery(`artists/${ id }`);


    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=US&limit=15&offset=5`, { headers })
    //                 .pipe( map( data => data['artists'].items));
  }


  getTopTracks( id: string) {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQB7KY1_Xq69_B9Xn0iZheQ26vDEueF6A9bMiwSCw2GnpVTsGLAECIk38gOnG0TRLRN1pmMmxOC-06qzMW8'
    // });

    return this.getQuery(`artists/${id}/top-tracks?country=ES`).pipe( map( data => data['tracks']));


    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&market=US&limit=15&offset=5`, { headers })
    //                 .pipe( map( data => data['artists'].items));
  }



}

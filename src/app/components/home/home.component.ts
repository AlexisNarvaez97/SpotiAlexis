import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  paises: any[] = [];
  nuevasCanciones: any[] = [];

  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor(private http: HttpClient, private spotify: SpotifyService) {

    this.loading = true;
    this.error = false;

    //Peticion GET a una api de paises.
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    //           .subscribe( (data: any) =>{
    //             this.paises = data;
    //             console.log(data);
    //           });

    this.spotify.getNewReleases()
                .subscribe( (data: any) =>{
                  console.log(data);
                  this.nuevasCanciones = data;
                  this.loading = false;
                }, (errorServicio)=>{
                  this.loading = false;
                  this.error = true;
                  console.log(errorServicio);
                  this.mensajeError = errorServicio.error.error.message;
                });

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private route: ActivatedRoute, private spotify: SpotifyService) {


      this.loading = true; //Prevenir error de carga.

      this.route.params.subscribe( params =>{
        console.log(params['id']);
        this.getArtista(params['id']);
        this.getTracks(params['id']);
      });
   }


   getArtista(id: string){
    this.loading = true; //Prevenir error de carga.
    this.spotify.getArtista(id).subscribe( artista =>{
      console.log(artista); 
      this.artista = artista;
      this.loading = false; //Se termina de cargar el artista y se muestra.
    });
   }

   getTracks(id: string){
     this.spotify.getTopTracks(id).subscribe( track =>{
       console.log("TRACK", track);
       this.topTracks = track;
     })
   }
   

}

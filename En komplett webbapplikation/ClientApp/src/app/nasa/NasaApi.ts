import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";



@Component({
  selector: "app-nasaApi",
  templateUrl: "./nasaApi.component.html"
})


export class NasaApi {

  data: any;
  baseUrl = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=";
  key = "55KfZoChBZOdrEZ1YEN4dRSUY5OXSr2TspkZkyhu";


  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

  //  http.get(baseUrl + 'NasaApi/getNasaApi').subscribe(result => {
  //    console.log(result);
  //    this.data = result;
  //  })

  //}

   constructor(http: HttpClient) {

    http.get(this.baseUrl+ this.key).subscribe(result => {
      console.log(result);
      this.data = result;
    })

  }
}








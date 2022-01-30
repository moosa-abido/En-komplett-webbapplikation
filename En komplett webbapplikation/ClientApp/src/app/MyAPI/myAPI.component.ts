import { HttpClient } from "@angular/common/http";
import { Component, Inject } from "@angular/core";

@Component({
  selector: "app-myAPI",
  templateUrl:"./myAPI.component.html"

})
export class MyAPI {


data:any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    http.get(baseUrl + 'getMyApi').subscribe(result => {
      console.log(result);
      this.data = result;
    })

  }
}

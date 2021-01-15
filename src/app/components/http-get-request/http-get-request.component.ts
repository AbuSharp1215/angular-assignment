import { Component, OnInit } from '@angular/core';
import { HttpGetService } from 'src/app/services/http-get/http-get.service';

@Component({
  selector: 'app-http-get-request',
  templateUrl: './http-get-request.component.html',
  styleUrls: ['./http-get-request.component.css']
})
export class HttpGetRequestComponent implements OnInit {

  res:any;

  constructor(private httpservice:HttpGetService) { }

  ngOnInit(): void {
    this.httpservice.getRecords().subscribe(
      response => {
        console.log(response);
        this.res = response;
      }
    );
  }

}

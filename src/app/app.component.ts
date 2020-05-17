import { Component, OnInit, ViewChild } from '@angular/core';
declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Stock-Sale';

  @ViewChild('dataTable') table;
  dataTable: any;
  constructor(){
  }

  ngOnInit(): void {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable();
  }


}

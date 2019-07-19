import { Component } from '@angular/core';

// var res1 = '', res2 = '', res3 = '';

const COUNTRIES = [
  {
    name: 'Russia',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    area: 9596960,
    population: 1409517397
  }
];

const temp = {
    "items": [
      {
        "index": 1,
        "name": 56,
        "addr": 32
      },
      {
        "index": 2,
        "name": 57,
        "addr": 13
      },
      {
        "index": 3,
        "name": 58,
        "addr": 37
      },
        {
        "index": 4,
        "name": 59,
        "addr": 48
      },
      {
        "index": 5,
        "name": 60,
        "addr": 22
      },
      {
        "index": 6,
        "name": 61,
        "addr": 43
      },
        {
        "index": 7,
        "name": 62,
        "addr": 30
      },
      {
        "index": 8,
        "name": 63,
        "addr": 34
      },
      {
        "index": 9,
        "name": 64,
        "addr": 2
      },
      {
        "index": 10,
        "name": 65,
        "addr": 15
      }
    ]
  }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  res1 = '1';
  res2 = '2';
  res3 = '3';
  myClickFunction(event) {

    // countries = COUNTRIES;
    var ini_type = JSON.stringify(temp.items[0]);
    var str = ini_type.substring(1,ini_type.length-1);
    var th1 = str.split(",")[0].split(":")[0];
    var th2 = str.split(",")[1].split(":")[0];
    var th3 = str.split(",")[2].split(":")[0];
    this.res1 = th1.substring(1,th1.length-1);
    // this.result = "here";
    this.res2 = th2.substring(1,th2.length-1);
    this.res3 = th3.substring(1,th3.length-1);
    // var th2 = result.substring(1,result.length-1);
    // console.log(res1, res2, res3);
  }
  
  countries = COUNTRIES;
  // countries.
}

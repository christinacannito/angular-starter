import { Component, OnInit, } from '@angular/core';
  /**
   * We're loading this component asynchronously
   * We are using some magic with es6-promise-loader that will wrap the module with a Promise
   * see https://github.com/gdi2290/es6-promise-loader for more info
   */
  
  @Component({
    selector: 'navigation',
    templateUrl: './summary.component.html'
  })
  export class SummaryComponent implements OnInit {
    warnings: boolean = true;
    dataVersion: string = '4.2';
    progress: string = 'In Progress';
    startDate: string = 'Oct. 10, 2017';
    releaseDate: string = '--';
    meters = [ '22%', '32%', '37%', '8%' ];
    quality: boolean = false;
    buildingsNumber:string = "15mm";
    responseBackData;

    public ngOnInit() {
      console.log('hello `summary` component');
    }
  
    showQuality() {
        this.quality = !this.quality;
    }

    

  }
  
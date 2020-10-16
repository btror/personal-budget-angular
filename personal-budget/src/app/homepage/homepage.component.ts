import { AfterViewInit, Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  public dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#2a5296',
                '#6e3aa6',
                '#e31b1b',
                '#2ec747',

            ],
        }
    ],
    labels: []
};

  constructor(private http: HttpClient) {}

  ngAfterViewInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (let i = 0; i < res.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createChart();
    });
  }

  // tslint:disable-next-line: typedef
  createChart() {
    const ctx = document.getElementById('myChart');
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
}

}


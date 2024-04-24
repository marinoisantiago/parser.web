import {Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-parser',
  standalone: true,
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css'],
  imports: [MatTableModule, FormsModule, HttpClientModule, CommonModule, MatButtonModule, MatSnackBarModule, MatFormFieldModule, MatInputModule]
  
})
export class ParserComponent {
  text: string = '';
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['word', 'count'];
  showTable: boolean = false;
  totalSynonymsFound: number = 0; 

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  
  parseText(): void {
    this.http.post(`${environment.apiUrl}/parse`, { text: this.text }).subscribe(
      data => {
        let response = data as any;
        let parsedData = JSON.parse(response.analysis);
        this.dataSource.data = parsedData;
        
        this.totalSynonymsFound = parsedData.reduce((total: number, item: {word: string, synonyms_found: number}) => total + item.synonyms_found, 0);
        if (!this.showTable) this.showTable = true;
      },      
      error => {
        console.error('Error in POST to /parse', error);
        this.snackBar.open('Error in POST to /parse', 'Close', {
          duration: 3000,
        });
      },   
    );
  }

  clearText(): void {
    this.text = '';
    this.showTable = false;
    this.totalSynonymsFound = 0;
  }
}


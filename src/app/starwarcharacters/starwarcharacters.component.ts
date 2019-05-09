import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSnackBar} from '@angular/material';
import {SwapapiService} from '../services/swapapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-starwarcharacters',
  templateUrl: './starwarcharacters.component.html',
  styleUrls: ['./starwarcharacters.component.css']
})
export class StarwarcharactersComponent implements OnInit {
  characters: any;
  starwar: any;
  starwarPayload: any;
  countnum: any = 0;

  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'favourite', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private route: ActivatedRoute,
              private swapapiservice: SwapapiService,
              private router: Router,
              private snackBar: MatSnackBar,
  ) {
  }

  // Life Cycle Method Called when page is initialized and contains function to fetch star war character details
  ngOnInit() {
    this.getStarWarCharacters();
  }

  // Function to fetch Star War Characters
  getStarWarCharacters() {
    this.swapapiservice.getStarWarCharacters()
      .subscribe(starwarcharacters => {
        this.characters = starwarcharacters;
        this.starwar = this.characters.results;
        this.starwarPayload = [];
        for (let i = 0; i < this.starwar.length; i++) {
          this.starwar[i].isFavorite = false;
        }
        localStorage.setItem('starwarcharacters', JSON.stringify(this.starwar));
        const starter = 0;
        sessionStorage.setItem('count', starter.toString());
        return this.starwar;
      });
  }

  // View Character Details in a new Page
  viewDetails(id) {
      this.router.navigate(['/characters/details/', id + 1]);
  }

  // Function to Mark List Item Favourite and Unfavourite
  toggleFavorite(item) {
    console.log('Item Clicked', item);
    this.starwar = JSON.parse(localStorage.getItem('starwarcharacters'));
    const contact = this.starwar[item];
    contact.isFavorite = !contact.isFavorite;
    localStorage.setItem('starwarcharacters', JSON.stringify(this.starwar));
    if ( contact.isFavorite === true) {
      this.countnum = this.countnum + 1;

      if (this.countnum <= 5) {

      } else {
        this.openSnackBar('Maximum number of favorite characters has been reached!');
        contact.isFavorite = false;
        localStorage.setItem('starwarcharacters', JSON.stringify(this.starwar));
          }
    } else {
      this.countnum = this.countnum - 1;
    }

  }

// Snack Bar for Notification
openSnackBar(message: string) {
  this.snackBar.open(message, 'Undo', {
    duration: 2000,
  });
}
}



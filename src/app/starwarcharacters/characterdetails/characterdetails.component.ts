import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SwapapiService} from '../../services/swapapi.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  id: number;
  characterdetails: any;

  constructor(private route: ActivatedRoute , private swapapiservice: SwapapiService) { }

  // Life Cycle Method Called when page is initialized
  ngOnInit() {
    // Fetch Param passed via route
    this.id = this.route.snapshot.params.characterId;
    // Fetch Character Details
    this.swapapiservice.getStarWarCharactersDetails(this.id)
      .subscribe(starwarcharactersdetails => {
        this.characterdetails = starwarcharactersdetails;
        console.log('The Swap API Details returned', starwarcharactersdetails);
      });
  }


}

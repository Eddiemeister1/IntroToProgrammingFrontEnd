import { Component, OnInit } from '@angular/core';
import { LearningListItem } from '../models/learning.models';

@Component({
  selector: 'app-learning-path-list',
  templateUrl: './learning-path-list.component.html',
  styleUrls: ['./learning-path-list.component.css']
})
export class LearningPathListComponent implements OnInit {

  items: LearningListItem[] = [
    { id: '1', topic: 'Docker', competency: 'Competency' },
    { id: '2', topic: 'Jazz Piano', competency: 'None', notes: 'Give up' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

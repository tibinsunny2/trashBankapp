
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})

export class DeleteConfirmComponent implements OnInit {
  @Input() item: String | undefined
  // creating an event that will be work in the parent class
@Output() onCancel=new EventEmitter

  constructor() {
  }

  ngOnInit(): void {
  }

  cancel(){
    this.onCancel.emit()
  }
}

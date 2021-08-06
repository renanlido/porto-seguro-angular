import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-full-list-hospitals',
  templateUrl: './full-list-hospitals.component.html',
  styleUrls: ['./full-list-hospitals.component.scss']
})
export class FullListHospitalsComponent implements OnInit {
  public innerWidth: any = window.innerWidth;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  public headingProps = {
    color: 'yellow400',
    fontSize: this.innerWidth < 768 ? '1.1rem ' : ''
  };

  @Input() isOpen = false;

  @Output() OpenCardStatusEmitter: EventEmitter<boolean> = new EventEmitter();

  handleClose() {
    this.isOpen = !this.isOpen;

    this.OpenCardStatusEmitter.emit(this.isOpen);
  }
}

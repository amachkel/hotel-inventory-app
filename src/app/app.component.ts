import {
  Component,
  AfterViewInit,
  ViewChild,
  OnInit,
  ElementRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'hotel Inventory App';

  @ViewChild('name', { static: true }) name!: ElementRef;

  ngOnInit() {
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }
  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  //   ngAfterViewInit(): void {
  //     const componentRef = this.vcr.createComponent(RoomsComponent);
  //   }
}

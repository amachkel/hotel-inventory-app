import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  selectedRoom!: RoomList;

  rooms: Room = { totalRooms: 20, availableRooms: 10, bookedRooms: 5 };

  roomList: RoomList[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 101,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 4.57,
      },
      {
        roomNumber: 102,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 3.45674,
      },
      {
        roomNumber: 103,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: 'https://unsplash.com/photos/Yrxr3bsPdS0',
        checkinTime: new Date('11-Nov-2022'),
        checkoutTime: new Date('12-Nov-2022'),
        rating: 2.6,
      },
    ];
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'primeng/primeng';
import { NotificationsService } from './notifications.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  msgs: Message[] = [];
  subscription: Subscription;

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.subscribeToNotifications();
  }

  // subscribeToNotifications() {
  //   this.subscription = this.notificationsService.notificationChange
  //   .subscribe(notification => {
  //     this.msgs= [] ;
  //     this.msgs.push(notification);
  //   });
  // }
  isSticky:boolean = false;
   lifeTime:number = 3000; 
   subscribeToNotifications() { 
     this.subscription = this.notificationsService.notificationChange 
     .subscribe(notification => { 
       let notificationObject = <NotificationsComponent> notification;
      //  this.isSticky = notificationObject.isSticky; 
      //  this.lifeTime = notificationObject.lifeTime; 
      //  this.msgs = []; 
       this.msgs.push(notification);
       });
       }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService){}//public公共属性

  ngOnInit() {
  }

}


// 逻辑：
//   该组件用于在屏幕底部显示应用中得消息
//   创建一个可注入得，全应用级别得MessageService,用于发送要显示得消息
//   把MessageService注入到HeroService中
//  当HeroService成功获取 了英雄数据时候显示一条消息

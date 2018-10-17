import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROES} from './mock-heroes'
import {Observable,of} from "rxjs/index";
import {MessageService} from "./message.service";

@Injectable({//装饰器
  providedIn: 'root'
})
export class HeroService {
  // constructor(private heroService:HeroService) {//往构造函数终添加一个私有的heroService}
   constructor(private messageService:MessageService){}
  // getHeroes():Hero[]{//非观察者模式
  //   return HEROES//返回数据
  // }

  // 观察者模式
  getHeroes():Observable<Hero[]>{//of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组。
    // return of (HEROES)
    this.messageService.add('HeroService:fetched heroes')
    return of (HEROES)
  }



  ngOnInit(){}
}

// 提供HeroService。在要求angullar把HeroService注入到HeroesComponent之前，须先把这个服务提供给依赖注入系统，提供商来做到这一点
// 提供商来创建和交付服务，这里会对HeroService类进行实例化，以提供该服务；
// 现在需要确保HeroService已经作为该服务的提供商进行过注册

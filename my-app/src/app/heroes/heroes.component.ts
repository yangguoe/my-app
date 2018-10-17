import { Component, OnInit } from '@angular/core';//从核心导入Component辅导，并为组件类加上@component装饰器
import {Hero} from '../hero'
// import { HEROES } from '../mock-heroes';
import {HeroService} from "../hero.service";

// @component是一个装饰器函数，用于为该组件指定angular所需的元数据
@Component({//里面3个都是元数据属性；
  selector: 'app-heroes',//组件的选择器
  templateUrl: './heroes.component.html',//组件模板文件的位置
  styleUrls: ['./heroes.component.css'],//组件私有css样式表文件的位置

})



export class HeroesComponent implements OnInit {//
  // 导入hero类
  hero:Hero = {
    id:1,
    name:'YangGuoe',
  }
  // heroes = HEROES
  heroes:Hero[]
  selectedHero:Hero;
  onSelect(hero:Hero):void{
    this.selectedHero = hero
  }

  // getHeroes():void{//非观察者模式
  //   this.heroes = this.heroService.getHeroes()
  // }
  getHeroes():void{//观察者模式订阅返回的数据
      this.heroService.getHeroes()
        .subscribe(heroes =>this.heroes = heroes)//观察者发出英雄数据，subscribe函数将把这个英雄数组传给这个回调函数，该函数将英雄数组赋值给组件的heroes属性

  }
  constructor(private heroService: HeroService) { }
  ngOnInit() {
    this.getHeroes();
  };//是一个生命周期钩子，angular在创建完组件后会很快调用ngOnInit,这里是放置初始化逻辑的好地方；

}


























































// /始终要export这个组件类，以便在其他地方导入他

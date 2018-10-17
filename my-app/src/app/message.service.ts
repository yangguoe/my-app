import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = []

  add(message: string) {//往缓存中添加一条消息
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }

  // constructor(private messageService: MessageService) { }
  // getHeroes():Observable<Hero[]>{
  //   this.messageService.add('HeroService:fetched heroes')
  //   return of (HEROES)
  // }
}

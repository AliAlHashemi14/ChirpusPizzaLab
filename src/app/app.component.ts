import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';
  Menu: MenuItem[] = [
    {
      name: "Cheese Pizza",
      category: "Pizza",
      price: 10
    },
    {
      name: "BBQ Wings",
      category: "Wings",
      price: 8
    },
    {
      name: "Meat Pizza",
      category: "Pizza",
      price: 12
    },
    {
      name: "Lemon Pepper Wings",
      category: "Wings",
      price: 8
    },
    {
      name: "Breadsticks",
      category: "Sides",
      price: 6
    },
    {
      name: "Garlic Knots",
      category: "Sides",
      price: 7
    }
  ];

  getByCategory(cat:string):MenuItem[]{
    let Result: MenuItem[] = [];

    this.Menu.forEach((i:MenuItem) => {
      if(i.category == cat){
        Result.push(i);
      } 
    })


    return Result;
  }
}

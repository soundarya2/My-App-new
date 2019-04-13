
    import { Component, OnInit } from '@angular/core';

    @Component({
    selector: 'app_menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
    })
    export class MenuComponent implements OnInit {
    menuList = [{"displayName":"Judge","url":"judge"},{"displayName":"Developers","url":"developers"}]
    constructor() { }

    ngOnInit() {
    }

    }


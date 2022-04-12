<p align="center">
 <img width="20%" height="20%" src="./logo.png">
</p>

<br />

[![ngx-loading-buttons](https://github.com/dkreider/ngx-loading-buttons/actions/workflows/ngx-loading-buttons.yml/badge.svg)](https://github.com/dkreider/ngx-loading-buttons/actions/workflows/ngx-loading-buttons.yml)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)


A lightweight Angular library to add a loading spinner to your [Angular Material](https://material.angular.io) buttons. 

<img src="./example.gif">


### Installation

```
ng add ngx-loading-buttons
```

## Usage

Import the `NgxPagememoryModule` into your `AppModule`. You can configure it as shown below:

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxLoadingButtonsModule } from 'ngx-loading-buttons';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    NgxLoadingButtonsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

And last of all, add it to your `<button>` element like this.

```html
<button mat-raised-button [mtBasicSpinner]="true">Basic</button>
```

You can also hide the button's text like this.

```html
<button mat-raised-button [mtBasicSpinner]="true" [hideText]="true">Basic</button>
```

A "real-world component" would likely look like this.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  saving: boolean = false;

  save(): void {
    this.saving = true;
    // Juggle 5 hens while wiggling your toes and other magic...
  }


}
```

And our template file.

```html
<button mat-raised-button [mtBasicSpinner]="saving" (click)="save()">Basic</button>
```

## Issues 🐛

Found a bug? Want to request a feature? Confused? Or wanna simply comment on how useful this library is? 

Open an issue [here](https://github.com/dkreider/ngx-loading-buttons/issues).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.danielk.tech/"><img src="https://avatars.githubusercontent.com/u/11043868?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Kreider</b></sub></a><br /><a href="https://github.com/dkreider/ngx-pagememory/commits?author=dkreider" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

Contributions of any kind welcome!

## Credits
- <a href="https://www.flaticon.com/free-icons/fidget-spinner" title="fidget-spinner icons">Fidget-spinner icons created by Smashicons - Flaticon</a>
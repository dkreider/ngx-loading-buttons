<p align="center">
 <img width="20%" height="20%" src="https://raw.githubusercontent.com/dkreider/ngx-loading-buttons/main/logo.png">
</p>

<br />

![npm](https://img.shields.io/npm/dt/ngx-loading-buttons)
![npm](https://img.shields.io/npm/dm/ngx-loading-buttons)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/ngx-loading-buttons)](https://bundlephobia.com/result?p=ngx-loading-button)
[![ngx-loading-buttons](https://github.com/dkreider/ngx-loading-buttons/workflows/ngx-loading-buttons/badge.svg)](https://github.com/dkreider/ngx-loading-buttons/actions/workflows/main.yml)
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![All Contributors](https://img.shields.io/badge/all_contributors-6-orange.svg?style=flat-square)](#contributors-)
[![npm](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](https://github.com/dkreider/ngx-loading-buttons/blob/main/LICENSE)


A lightweight Angular library to add a loading spinner to your [Angular Material](https://material.angular.io) buttons. 

<img src="https://raw.githubusercontent.com/dkreider/ngx-loading-buttons/main/example.gif">


### Installation

```
ng add ngx-loading-buttons
```

## Usage

Import the `NgxLoadingButtonsModule` into your `AppModule`. You can configure it as shown below:

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
    // Juggle 5 hens while wiggling your toes and other magic... 🤡
  }


}
```

And our template file.

```html
<button mat-raised-button [mtBasicSpinner]="saving" (click)="save()">Basic</button>
```

Add our styles to yours

```scss
@import 'ngx-loading-buttons/styles';
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
    <td align="center"><a href="https://www.danielk.tech/"><img src="https://avatars.githubusercontent.com/u/11043868?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Kreider</b></sub></a><br /><a href="https://github.com/dkreider/ngx-loading-buttons/commits?author=dkreider" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Totto16"><img src="https://avatars.githubusercontent.com/u/32566573?v=4" width="100px;" alt=""/><br /><sub><b>Totto</b></sub></a><br /><a href="https://github.com/dkreider/ngx-loading-buttons/commits?author=Totto16" title="Code">💻</a></td>
    <td align="center"><a href="https://megaphone.info/"><img src="https://avatars.githubusercontent.com/u/44493964?v=4" width="100px;" alt=""/><br /><sub><b>Raphaël Balet</b></sub></a><br /><a href="https://github.com/dkreider/ngx-loading-buttons/commits?author=rbalet" title="Code">💻</a></td>
     <td align="center"><a href="https://damingerdai.github.io/"><img src="https://avatars.githubusercontent.com/u/16384908?v=4" width="100px;" alt=""/><br /><sub><b>Arthur Ming</b></sub></a><br /><a href="https://github.com/dkreider/ngx-loading-buttons/commits?author=damingerdai" title="Code">💻</a></td>
     <td align="center"><a href="https://www.bolzplatzarena.net/"><img src="https://avatars.githubusercontent.com/u/6323357?v=4" width="100px;" alt=""/><br /><sub><b>Thomas Renger</b></sub></a><br /><a href="https://github.com/dkreider/ngx-loading-buttons/commits?author=rengert" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/fwautriche"><img src="https://avatars.githubusercontent.com/u/3090227?v=4" width="100px;" alt=""/><br /><sub><b>Fabien Wautriche</b></sub></a><br />🐛</td>
    <td align="center"><a href="https://github.com/tux1337"><img src="https://avatars.githubusercontent.com/u/33804893?v=4" width="100px;" alt=""/><br /><sub><b>tux1337</b></sub></a><br />🐛</td>    
    <td align="center"><a href="https://github.com/MilanNemeth"><img src="https://avatars.githubusercontent.com/u/63391662?v=4" width="100px;" alt=""/><br /><sub><b>Milán Németh</b></sub></a><br />🐛</td>    
    <td align="center"><a href="https://github.com/Deewens"><img src="https://avatars.githubusercontent.com/u/26287270?v=4" width="100px;" alt=""/><br /><sub><b>Adrien</b></sub></a><br />🐛</td>    
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.

Contributions of any kind welcome!

## Credits
- <a href="https://www.flaticon.com/free-icons/fidget-spinner" title="fidget-spinner icons">Fidget-spinner icons created by Smashicons - Flaticon</a>

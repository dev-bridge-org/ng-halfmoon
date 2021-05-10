# NgHalfmoon
This is the angular-library for [halfmoon](https://www.gethalfmoon.com/)

## Installation
You can install `ng-halfmoon` via npm
```bash
npm install halfmoon @fortawesome/fontawesome-free ng-halfmoon
```

## Setup
in your angular.json you need to add the following lines
```json
{
  "styles": [
    "node_modules/halfmoon/css/halfmoon.min.css",
    "node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css"
  ],
  "scripts": [
    "node_modules/@fortawesome/fontawesome-free/js/brands.min.js",
    "node_modules/@fortawesome/fontawesome-free/js/solid.min.js",
    "node_modules/@fortawesome/fontawesome-free/js/fontawesome.min.js",
    "node_modules/halfmoon/js/halfmoon.min.js"
  ]
}
```

Simply import the `NgHalfmoonModule` into your Application

```typescript
import {NgHalfmoonModule} from "ng-halfmoon";

@NgModule({
  imports: [
    NgHalfmoonModule
  ],
})
export class AppModule {
}
```
```html
<button hmButton appearance="primary">
```

If this shows the button in primary like on the halfmoon-docs you've made everything right.


## Current Components
Currently there is only one-component available for this library but more is already in development.
You can use halfmoon as you would use it with normal html.

### Basics
* Button

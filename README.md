# ember-cli-slippry

`ember-cli-slippry` is a component that is for showing images.

It wraps [slippry image slider](http://slippry.com/)

**NOTE** : This component is an experience for easing my development process of another project.

### Installation

From inside your ember-cli project, run the following:

```bash
ember install ember-cli-slippry
```

#### Installation without ember-cli

```bash
npm install ember-cli-slippry --save
```

**Add `@import 'ember-cli-slippry';` to `app.scss`**

### slippry-image-slider

```hbs
{{slippry-image-slider images=images height="600px" pagerFromBottom="50px"}}
```

#### `images`

An array of images urls

#### `height`

Height of slider box. Default: `200px`

#### `pagerFromBottom`

Height of pager from the bottom of the slider box. Default: `30px`

#### `pager`

Should show pager controls or not. Default: `true`

#### `controls`

Should show control arrows or not. Default: `false`

#### `isInfinite`

Loop over images or not. Default: `true`


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

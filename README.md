[![npm version](https://badge.fury.io/js/svero.svg)](https://www.npmjs.com/package/svero)

<p align="center">
  svero (<b>Sve</b>lte <b>Ro</b>uter): A simple router for Svelte 3.
</p>

## First things first

svero is intented for use in SPA (Single Page Applications) making usage of `pushState` and History API. We're assuming here that you already know how to configure your front-end server (being it dev or production) to serve all path requests to `index.html`.

If you're not familiar with the terms SPA, `pushState` or History API, you should probably be reading these first:

<small>http://krasimirtsonev.com/blog/article/deep-dive-into-client-side-routing-navigo-pushstate-hash</small><br>
<small>https://css-tricks.com/using-the-html5-history-api/</small><br>
<small>https://diveinto.html5doctor.com/history.html</small><br>
<small>https://developer.mozilla.org/pt-BR/docs/Web/API/History</small><br>

## Usage

The usage is as simple as this:

```html
<!-- ./App.html -->
<script>
  import { Router, Route } from 'svero';

  import Index from './pages/Index.html';
  import About from './pages/About.html';
</script>

<Router>
  <Route path="*" component={Index} />
  <Route path="/about" component={About} />
  <Route path="/about/:who/123/:where" component={About} />
</Router>
```

The `*` wildcard here simply works as a fallback. If a route fails to meet any other path, it then loads the path with the `*`, if it exists.

Paths with parameters (`:param`) are passed to components via props: `router.params`.

A component loaded by `<Route>` receives a property with route details:

```html
<!-- ./pages/Index.html -->
<script>
  export const router = {};

  // Those contains useful information about current route status
  router.route;
  router.params;
</script>
```

There is also an useful `<Link>` component that overrides `<a>` elements:

```html
<Link href="path/here" className="btn">Hello!</Link>
```

The difference between `<Link>` and `<a>` is that it uses `pushState` whenever possible, with fallback to `<a>` behavior. This means that when you use `<Link>`, svero can update the view based on your URL trigger, without reloading the entire page.
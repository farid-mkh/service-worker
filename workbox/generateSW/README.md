# workbox-build 

Workbox is flexible enough to accommodate just about any project's build process. This means there's more than one way to use Workbox, allowing you to choose the right integration for your project. Regardless of how you integrate with Workbox, the various tools offer a similar API.

## generateSW vs injectManifest

You'll rely on one of two core methods of Workbox's build tools: generateSW or injectManifest. Which one you should use depends on how much flexibility you need. generateSW prioritizes ease of use and simplicity at the cost of flexibility, allowing you to declare a set of configuration options and giving you a fully functional service worker in return.

injectManifest favors greater flexibility at the cost of some simplicity, since you'll end up writing the code for your service worker yourself, with injectManifest providing a precache manifest that can be used by Workbox's precaching methods.

> from [doc](https://developer.chrome.com/docs/workbox/the-ways-of-workbox/)

## Project
> This is generateSW example

### How to run to generate sw.js
1. `yarn install` or `npm install`
2. `node workbox.js`
3. Then `sw.js` will be created
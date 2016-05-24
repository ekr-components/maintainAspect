# maintainAspect

This component will maintain the proper aspect of a element based on the
aspect ratio of the background image of that element. Basically, it will alter
the height of the element based on the width of the element.

It does this by lazy-loading the image in the background, then calculating the
aspect ratio and applying it.

## How to use this component

```html
<div 
	data-component="maintain-aspect"
	data-ma-image="background-image.jpg">
</div>
```

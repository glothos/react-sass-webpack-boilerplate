# Includes

All Style Files

## Folders / Files

### Tree
+base
+components  
+global  
+routes  
app.scss  

### Files Description
`base` has style files which are not specific to certain components or routes. i.e `text-center`, `display-inline` ...
`components` has style files specific to the components. It is possible that we use inline styling for some components(especially for one from third party libraries).  
`global` has style files defining all the constants required to define the styles. There can be fonts, colors, dimensions, whatever are used globally on different styles.  
`routes` has style files specific to the routes (url).  
`app.scss` imports all styles so that it is visible to the page.  

### Note
It is not that simple to have a right style structure while it is very important.  
We should think twice when we add styling codes. Where are you going to put the code in? Which folder?  
For example, if you want to define the style for a component but only when it is on a certain route(Button on /users page should be blue always).  
This is applied to Button but should be written under routes (with comments if possible).  
And it should look like the following ...  

```
#users-page {
  ...
  .button { // button should be blue when it's on users page.
    background-color: blue;
  }
}
```

Also if two exactly same style pattern is used on different locations, we should define new classname and add it to `base`. Copy & Pasting styles from a page to another is not acceptable even if it's only once.  

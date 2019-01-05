# Includes

Components For Certain Route / URL

## Folders / Files

### Tree

+route1
  +__tests__
  +components (optional)
  +routes (optional)
  index.js
  messages.js (optional)
+route2
  ...

### Files Description

Every component has a root folder with the proper screen name.  
`components` is a folder to keep the components to be used to render this route(all common components to be used under this route). Each component can be a single file or have a structure same to this (and nested again if necessary) - components, __tests__, index.js, messages.js. When the component is defined as a single file (ie. Header), you need to define a test file under __tests__ of this route.  
`routes` is a folder to keep the nested routes. If url is users/:userId, structure will look like /Users/routes/UserDetils.  
`index.js` is where we define a container/page.  
`messages.js` is to keep the pairs of id and defaultMessage for multilingual titles/subheadings/descriptions/captions/...  

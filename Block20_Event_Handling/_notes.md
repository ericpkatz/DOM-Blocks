# WIIFM

Web developers need to write programs which respond to user interactions with forms, and form elements.

# Overview

The data, which determines the user interface, will change based on the selections of the user.

# Learning Objectives

- Understanding the role event handlers play in user interfaces. 
- Adding event handlers to an HTML form to bypass to default form behavior
- Adding event handlers to a parent container
- Determining the index of a child element by using DOM traversal
- Create a webpage where the UI is determined by an array of data, which can be modified using event handling. 

# Slide Deck should include

- The data to UI paradigm
- Adding Event Handlers -> functions for user interaction
- Event handler functions -> are called, we don't call them
- Example, click of a button, submission of a form
- Forms -> allow users to input data 
- Forms -> composed of buttons, drop downs, inputs etc
- Form elements should be in a form, rather than just rendering a button for accessibility (not sure about this, but I think we favor folks use forms)
- Buttons within forms trigger the submit event of the form
- For interactive applications -> bypass normal form behavior -> ev.preventDefault()
- User Event -> ie form submission -> data change -> render
- Event Handlers - passed events -> can be used to find target 
- Target -> can be used to traverse DOM
- idx = [...ev.target.parentNode.children].indexOf(ev.target);
- Node -> ev.target.querySelector allows us to find elements within the form (useful). Allows us to show that document or ev.target are both nodes.
- Rendering - both classes and inline styles can be used (see oddsEvens.html)


# Utilizes

- forms
  - select
  - input
  - button
- document.addEventListener
- preventDefault() 
- DOM traversal
  - parentNode
  - children
  - spread
- Array.splice
- Array.filter

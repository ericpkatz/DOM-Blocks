# WIIFM

Web developers need to be able to create performant applications which render data based on changes in the url.

# Overview

User interfaces will be rendered from data which is fetched from another server using the fetch API. Event handling will be used to listen for changes in the url's hash and use the data in the hash to render the appropriate details.

# Learning Objectives

- Understanding the concept of single page applications
- Understanding how a hash change can be used to determine what is displayed on a single page application.
- Creating a single page web application.

# Slide Deck should include

- The data to UI paradigm
- SPA -> multiple views without reloading page
- Change of the URL hash # -> change of view
- We can specify a function for when when hash changes
- The hash value can be considered part of the data we use to render our view
- Link -> changes hash -> changes view
- Common Cases
  - List Detail -> show which items is selected and the detail
  - Search -> show results which 'match' search
- JSON -> stringify and parse (for displaying formatted json data)
- Our examples make one fetch call, but multiple fetch calls could be made based on hash changes.

# Utilizes

- hashchange event of window
- window.location.hash property
- JSON.stringify

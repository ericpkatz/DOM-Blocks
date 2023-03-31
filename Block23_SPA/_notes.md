# WIIFM

Web developers need to be able to create performant applications which render data based on changes in the url.

# Overview

User interfaces will be rendered from data which is fetched from another server using the fetch API. Event handling will be used to listen for changes in the url's hash and use the data in the hash to render the appropriate details.

# Slide Deck should include
- The data to UI paradigm
- SPA -> multiple views without reloading page
- Change of the URL hash # -> change of view
- We can specify a function for when when hash changes
- Link -> changes hash -> changes view

# Utilizes

- hashchange event of window
- window.location.hash property
- JSON.stringify

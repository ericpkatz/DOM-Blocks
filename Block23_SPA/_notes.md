# WIIFM

Web developers need to be able to create performant applications which render data based on changes in the url.

# Overview

User interfaces will be rendered from data which is fetched from another server using the fetch API. Event handling will be used to listen for changes in the url's hash and use the data in the hash to render the appropriate details.

# Utilizes

- hashchange event of window
- window.location.hash property
- JSON.stringify

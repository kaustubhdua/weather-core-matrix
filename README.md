# Dynamic Weather Dashboard

A lightweight, browser-based weather dashboard built with vanilla HTML, CSS, and JavaScript. Enter a city to request and display current weather information.

## Features

- City-based weather lookup
- Dynamic results rendered in the page
- Responsive layout with a dedicated search and results area
- Loading, empty-input and error states (not found, timeout, network failure, malformed response)
- Requests time out after 10 seconds and the city name is URL-encoded
- No framework or build step required

## Run locally

Clone the repository and open `index.html` in a modern browser. If the browser blocks local requests, serve the folder with a local HTTP server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Project structure

- `index.html` — page structure
- `style.css` — presentation and responsive styling
- `app.js` — search interaction and weather data handling

## Configuration and limitations

Weather data comes from the public [wttr.in](https://wttr.in) service; no API key is needed, but availability and rate limits are outside this project's control. Weather results are informational and should not be used as the sole basis for safety-critical decisions.

## Tests

```bash
node --test tests/*.test.mjs
```

## Future improvements

- Show the data provider and last-updated time
- Remember the last searched city
- Behavioural browser tests

## Licence

Copyright (c) 2026 Kaustubh Dua. All rights reserved. See `LICENSE`.

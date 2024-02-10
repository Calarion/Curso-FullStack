
```mermaid
sequenceDiagram
    participant browser
    participant server

browser ->> server : HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server ->> browser : HTTP 200
browser ->> server : HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server ->> browser : HTTP 200 
browser ->> server : HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
server ->> browser : HTTP 200 
browser ->> server : HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server ->> browser : HTTP 200 
```

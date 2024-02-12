
```mermaid
sequenceDiagram
    participant browser
    participant server

browser ->> server : HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server ->> browser : HTTP 200

Note right of browser: The browser refreshes the note list

```

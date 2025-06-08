````mermaid

sequenceDiagram
participant browser
participant server

browser ->>server : POST new note
activate server
server -->>browser : CODE 302 https://studies.cs.helsinki.fi/exampleapp/new_note
deactivate server

browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/notes
activate server
server -->> browser: the HTML document
deactivate server

browser ->> server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server -->> browser: the css file
deactivate server

browser ->>server : GET https://studies.cs.helsinki.fi/exampleapp/main.js
activate server
server -->>browser : the JS file
deactivate server

browser ->> server: GET 
https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server -->> browser: data.json
deactivate server

````

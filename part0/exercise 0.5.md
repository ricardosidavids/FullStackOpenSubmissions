```mermaid
participant browser
participant server

browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
activate server
server -->>browser: spa html file
deactivate server

browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server -->>browser : the css file
deactivate server

browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
activate server
server -->>browser: the js script
deactivate server

browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server -->>browser: the json file
deactivate server



```

# QA

1. Form task ?
2. Controlled vs uncontrolled element ? When to use what ?
3. How many state does a checkbox have ? How to get checkbox value while
   handling ?

## How to up local json-server

1. npm install json-server
2. Ad db.json data in root your project
3. npx json-server --watch db.json
4. By default server available on http://localhost:3000
5. Change it npx json-server --watch db.json --port 8080
6. Add script in package.json

```json
{
  "mock-api": "json-server --watch db.json --port 8080"
}
```

```js
[
  { id: "id-1", text: "Вивчити основи React", completed: true },
  { id: "id-2", text: "Розібратися з React Router", completed: false },
  { id: "id-3", text: "Пережити Redux", completed: false },
];
```

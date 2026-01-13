# Node.js File System (fs)

Quick revision notes for the **Node.js File System (fs)** covering sync vs async, promises, async/await, and Promise.all.

---

## What is `fs`?
The `fs` module allows **Node.js** to read, write, update, and delete files.

Files are stored as **binary data** and converted to **strings** using encodings like `utf-8`.

---

## Sync vs Async

### Sync (Blocking)
```js
fs.readFileSync('file.txt', 'utf-8');
``` 
- Blocks event loop
- Use only for scripts / CLI

## Async (Non-Blocking)
```Js 
fs.readFile('file.txt', 'utf-8', callback);
```

- Server-safe
- Scalable

### Promises API (Preferred)
``` Js 
const fs = require('fs/promises');
```

### Read & Write (Promises)
``` Js 
fs.readFile('a.txt', 'utf-8')
  .then(data => fs.writeFile('b.txt', data))
  .catch(console.error);
```

### async / await (Best Readability)
``` Js 
const fs = require('fs/promises');

async function copy() {
  const data = await fs.readFile('a.txt', 'utf-8');
  await fs.writeFile('b.txt', data);
}
```

- Non-blocking
- Cleaner syntax
- Try/catch for errors

### async/await Execution
``` Js 
await task1();
await task2();
```
- Runs sequentially
- Use when tasks depend on each other.

### Promise.all (Parallel Execution)
```Js 
await Promise.all([
  fs.readFile('a.txt', 'utf-8'),
  fs.readFile('b.txt', 'utf-8')
]);
```
- Runs in parallel
- Use when tasks are independent.
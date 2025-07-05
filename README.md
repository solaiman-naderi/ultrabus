# microbus

> A super tiny, zero-dependency event bus for JavaScript.  
> Perfect for Node.js, browser, bun, deno, and beyond.

## 📦 Install

## 🚀 Usage

```js
import { microbus } from "microbus";

const bus = microbus();

bus.on("hello", (msg) => console.log(msg));
bus.emit("hello", "🌍 Hello world!");
```

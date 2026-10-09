Flame graph - react Profiler

Тема 18. useRef(), useContext()

1. useRef, useContext
2. Optimize rerender while using context

Оскільки Nav перемальовується, бо змінюється батько, але він статичний туди
ніяких пропсів і стейту не передають, можна його огорнути в memo

```js
export default memo(Nav);
```

# useEffect vs useLayoutEffect

**useEffect** - side effects; **useLayoutEffect** - change dom node directly

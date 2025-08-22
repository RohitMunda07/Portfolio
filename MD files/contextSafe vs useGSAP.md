Great question 🔥 — this is exactly where most people get confused with **`@gsap/react`**.
Let’s clear it up properly:

---

## 🔹 `useGSAP()`

* A React hook from `@gsap/react`.
* It runs your GSAP code **on mount** (or when dependencies change).
* Automatically ties GSAP animations to the React lifecycle → cleans them up when the component unmounts.
* **Best for initial animations** or **animations triggered by component state/props**.

✅ Example (page load animation):

```jsx
useGSAP(() => {
  gsap.from(".box", { y: 100, opacity: 0, duration: 1 });
}, []); // dependency array like useEffect
```

---

## 🔹 `contextSafe()`

* A helper returned by `useGSAP`.
* It **wraps a function** so that GSAP runs in React’s “context” → meaning cleanup and scoping still work.
* **You use it for event handlers, callbacks, or anywhere GSAP runs outside `useGSAP()`.**

✅ Example (animation on click):

```jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Button() {
  const { contextSafe } = useGSAP();

  const handleClick = contextSafe(() => {
    gsap.to(".box", { rotation: 360, duration: 1 });
  });

  return (
    <>
      <div className="box w-20 h-20 bg-blue-500"></div>
      <button onClick={handleClick}>Animate</button>
    </>
  );
}
```

👉 Here, if you didn’t wrap it with `contextSafe`, GSAP would still work, but React wouldn’t properly clean up when the component unmounts → possible memory leaks.

---

## ⚡ Rule of Thumb

* **Use `useGSAP()`** → for animations that should run on **mount/update**.
* **Use `contextSafe()`** → for animations that run inside **event handlers, callbacks, async stuff** (things not directly tied to render).

---

✅ In your **Header** example:

* Navbar entrance animation → `useGSAP()`.
* If later you add a **“Menu” button click animation** → that’s where you’d use `contextSafe()`.

---

Do you want me to make a **side-by-side example** (`useGSAP` vs `contextSafe`) so you can literally see when each one makes sense in the same component?

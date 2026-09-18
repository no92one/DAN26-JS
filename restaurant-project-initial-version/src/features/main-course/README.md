# Main-course feature

Open [the page](../../html/main-courses.html) and read these three files together:

| File | Responsibility |
| --- | --- |
| `data.js` | Holds the original main-course objects. |
| `utils.js` | Creates product elements and handles clicks on their buttons. |
| `index.js` | Connects the feature to the page: finds elements, registers listeners and renders courses. |

## Modules and imports

`export` makes a value available to other modules, but does not automatically place it in every file. A file must explicitly `import` what it uses. Curly braces indicate a **named import**:

```js
import { mainCourses } from "./data";
import { createMainCourseEL, handleMenuElClick } from "./utils";
```

The placeholder image is imported without braces because the image module has a **default export**. Vite turns that import into a URL that can be used as an image source. The page loads `index.js` with `<script type="module">`, allowing it to use imports.

## Rendering the menu

`document.querySelector(".menu")` returns the menu element from the page. The loop in `index.js` passes each object from `mainCourses` to `createMainCourseEL()` and appends the returned `<article>` to that menu.

`createMainCourseEL()` is a function: it receives one course object, reads its `image`, `name`, `description` and `price`, and returns an HTML element. Its template string assigns the product card's markup through `innerHTML`. The `<article>` also receives `data-name` and `data-price` attributes, which can later be read through `element.dataset`.

The amount input's `id` is built from the name so its `<label for="…">` points to that input. Names must be unique for this to produce unique IDs. In this classroom demo, user-entered text also goes into `innerHTML`; a real app would need to treat untrusted input more carefully.

## Submitting a new course

`index.js` finds the form and its inputs with `querySelector()`. In the `submit` listener, `event.preventDefault()` stops the browser's normal form submission and page reload. Each input's `.value` gives the text currently entered by the user. The code puts those values into a new object, uses the placeholder image, creates a product element and appends it to the menu.

The form does **not** add the new course to `data.js` or persist the new menu card. Reloading the page restores the original menu. Its `price` value is a string because `.value` always returns a string.

### Alternative: `FormData`

The same form values could be collected like this inside the submit listener instead of querying each input separately:

```js
const formData = new FormData(formEL);
const newMainCourseData = {
  name: formData.get("name"),
  description: formData.get("desc"),
  image: placeholderImage,
  price: formData.get("price"),
};
```

`FormData` reads the inputs' **`name` attributes**, not their `id` attributes. For example, `formData.get("desc")` reads the input with `name="desc"`. The object property is still called `description` because that is what `createMainCourseEL()` expects. Use either this approach or the current `.value` approach, not both declarations at once. See the [HTML guide](../../html/README.md) for the form markup.

## One click listener for the whole menu

`menuEl.addEventListener("click", handleMenuElClick)` registers one listener on the menu, including for cards added later. This is called **event delegation**. `event.target` is the element actually clicked. When it has the `add-btn` class, `target.closest(".product")` finds the surrounding product card.

The helper then reads the card's amount input and `dataset` values, creates a `{ name, price, amount }` object, and passes it to `addProductToLS()`. The button is not the product card; passing the button directly would not expose the card's input or data attributes.

For now, clicking the same product twice creates two stored entries. Combining them by increasing `amount` is a possible next exercise; see the [local-storage guide](../../shared/README.md).

# HTML pages and forms

`index.html` is the home page at the project root. The other pages live here, in `src/html/`. Their relative paths are therefore different: from this folder, `../../index.html` reaches the home page and `../css/style.css` reaches the shared stylesheet. The main-course page loads its own module with `../features/main-course/index.js`.

The appetizers, desserts and drinks pages currently show static example content. Their buttons do not run the main-course JavaScript. The cart page loads its own module with `../features/cart/index.js`; it reads saved products from `localStorage` and shows an empty-cart message if there are none. Its order form is still only markup and does not submit an order to a server.

## The main-course form

The input fields in `main-courses.html` belong inside a `<form>`. This gives them form semantics and makes the submit button trigger a `submit` event. The JavaScript calls `event.preventDefault()` to take control of what happens next.

Each `<label>` has a `for` value matching its input's `id`, such as `for="new-name"` and `id="new-name"`. This connection helps users interact with the field and gives assistive technology its label. An `id` identifies an element on the page; a `name` identifies a form field when the form's data is collected.

The inputs have `name="name"`, `name="desc"` and `name="price"` because the alternative `FormData` code in the [main-course guide](../features/main-course/README.md) looks up exactly those names. `FormData` does not use the IDs for this lookup.

The form's number input still yields a string when read with `.value` or `FormData.get()`. Convert it with `Number(...)` when doing arithmetic. The form currently has no `required` attributes, so empty fields are allowed; validation can be added when that becomes part of the lesson.

## The cart page

The `<section class="cart">` starts without hard-coded product cards. The cart module adds either cards from storage or an empty-cart message. `aria-live="polite"` lets assistive technology announce changes to that section without interrupting the user. The summary contains two `<span>` elements with IDs so JavaScript can replace their text without rebuilding the whole section.

The cart page's order form remains separate from the cart-rendering feature. Its submit button currently uses the browser's normal form behavior; it does not place an order.

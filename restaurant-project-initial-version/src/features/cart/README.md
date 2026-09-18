# Cart feature

Read `index.js` and `utils.js` alongside [cart.html](../../html/cart.html). This follows the same split as the [main-course feature](../main-course/README.md): `index.js` connects code to the page, while `utils.js` holds reusable rendering and calculation functions. There is no `data.js` here because saved products come from the shared `localStorage` module.

## Where the products come from

The main-course page saves objects shaped like `{ name, price, amount }`. The cart imports `getProductsFromLS()` to read those objects. `getProductsFromLS()` returns `null` before any products have been saved. A simple `if` then changes that `null` to an empty array, so the rest of the renderer can always work with an array.

The cart reads storage **inside `renderCart()`**, not just once at the top of the module. `renderCart()` is called only when the page first loads and after a product is removed. That second call reads the updated saved array. It is not a timer or a continuously running loop. When there are no products, it shows “Din kundvagn är tom.”

## Rendering from the current state

`cartEl.innerHTML = ""` clears the previous cards before new ones are added. Without it, every re-render would append another copy of each product. The loop creates one `<article class="cart-item">` per saved object by calling `createCartItemEL(product)`. That helper returns an element; it does not append it to the page itself.

Each article stores its product name in `data-name`. JavaScript reads that as `cartItemEl.dataset.name` when the remove button is clicked. The card shows the amount, price per item and line total. Its line total is `Number(price) * Number(amount)`.

The cart uses `innerHTML` for these cards, like the main-course feature. It keeps the HTML template easy to read for this local teaching demo. In an application that accepts untrusted data, inserting strings into `innerHTML` would require extra care.

## Summary totals

`calculateCartTotals(products)` loops over the same array used for the cards. It adds each product's **quantity** to `totalAmount`, and `price × quantity` to `totalPrice`. For example, two pizzas at 129 kr count as two products and 258 kr, not one product and 129 kr. The function returns both totals in an object. `index.js` writes them into the two summary spans using `textContent`.

Input `.value` and `dataset` values are strings. `Number(...)` is necessary for addition: `"2" + "1"` gives `"21"`, while `Number("2") + Number("1")` gives `3`. Multiplication would coerce strings automatically, but converting explicitly keeps the rule visible.

## Removing and re-rendering

One click listener is attached to the `.cart` container. This is **event delegation**: it also works for cards created after the listener was registered. A click on a button with class `remove-btn` finds its surrounding `.cart-item` through `closest()`, reads the item's name, calls `removeProductFromLS()`, and then calls `renderCart()` again. The second render updates the cards, empty message and summary together.

The current storage function removes by product name. The desired cart rule is one entry per name, but `addProductToLS()` still pushes duplicates. Until the add function is changed, adding the same product twice displays two cards and removing either one removes both. This is intentionally left as a student exercise: find an existing entry by name and increase its amount instead of pushing a duplicate.

## Scope of this feature

The cart's order form is not wired to JavaScript yet. The appetizers, desserts and drinks pages also remain static, so their “Lägg till” buttons do not save products. This cart currently reflects products added from the main-course page.

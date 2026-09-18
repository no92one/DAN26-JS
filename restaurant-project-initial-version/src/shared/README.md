# Saving products with `localStorage`

`localStorage.js` is shared code that other features can import. Browser `localStorage` stores **strings**, not arrays or objects. `setLS()` uses `JSON.stringify()` before saving; the exported `getProductsFromLS()` uses `JSON.parse()` after reading. If the `products` key is absent, parsing its `null` value returns `null`. The cart checks for `null` with an `if` and uses an empty array when it renders.

`PRODUCTS_KEY` keeps the storage-key string in one place. If the key ever changes, there is only one value to update. Because the constant is declared in this module, it is not automatically available in another file.

## Adding

`addProductToLS(product)` loads the existing array. If there is none, it saves a new one-element array. Otherwise, it pushes the product and saves the array again. The product passed by the main-course feature contains `name`, `price` and `amount`.

This version deliberately does not combine repeated additions. Clicking the same product twice currently stores two entries with the same name. If the cart should contain only one entry per name, an exercise is to find that entry and **add the selected amount** to its current amount. Convert both amounts with `Number(...)` first: `"2" + "1"` is `"21"`, not `3`.

## Removing

`removeProductFromLS(product)` accepts a product object and keeps only stored products whose `name` differs from `product.name`. It safely returns if no products have been saved yet. This name-based rule assumes product names uniquely identify cart entries; if duplicate names are present, it removes all entries with that name.

The function does not compare whole objects with `===` or `!==`. Objects returned by `JSON.parse()` are new objects in memory, so two objects with identical properties are not equal by reference.

The cart page calls this function when a remove button is clicked, then reads storage again and re-renders. It passes an object containing the selected card's name, because the removal function accepts a product object rather than a name string.

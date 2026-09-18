# Restaurant Java — learning guide

This project is a small restaurant website for practising HTML, CSS, JavaScript modules, DOM events and `localStorage`. It is intentionally a work in progress: the main-course page can add products, and the cart page displays and removes saved products. The other menu pages are still static examples.

To run it locally, open a terminal in this folder and run `npm install`, then `npm run dev`. Open the address printed by Vite. The home page is `index.html`; the other pages are in `src/html/`.

## Where to read next

- [Main-course JavaScript guide](src/features/main-course/README.md) — modules, rendering, events and adding a product.
- [Cart JavaScript guide](src/features/cart/README.md) — reading storage, rendering the cart, totals and removal.
- [HTML guide](src/html/README.md) — page structure, forms, labels and `FormData`.
- [Local-storage guide](src/shared/README.md) — saving arrays as JSON and the cart rules.
- [CSS guide](src/css/README.md) — selectors, layout and responsive styling.

Read a guide alongside its source files. The guides explain *why* the code is written this way; the source files show the working implementation without long teaching comments.

## Next steps — finish the menus and cart

Continue working on Restaurant Java. First, study the [main-course page](src/html/main-courses.html) and the files in [`src/features/main-course/`](src/features/main-course/). Use them as examples when adding functionality to the [appetizers](src/html/appetizers.html), [desserts](src/html/desserts.html), and [drinks](src/html/drinks.html) pages. The guides above explain the existing code in more detail.

### 1. Move product data into JavaScript

Create an array of product objects for each menu page. Each object should contain at least a name, description, price, image, and alternative text for the image. Remove the hard-coded product cards from each HTML file, but keep an empty menu container for JavaScript to fill.

### 2. Build product cards with JavaScript

Loop through each array when its page loads and create a card for every product. Each card should show the image, name, description, price, an amount input, and a **“Lägg till”** (Add) button. Keep the existing CSS classes so the styling still works. Make the button save the selected product to the cart using the function in [`src/shared/localStorage.js`](src/shared/localStorage.js).

### 3. Add a form to each menu page

Each form should have fields for the product name, description, price, image URL, and image alt text, plus a button to add the product. On submission, JavaScript should prevent the normal page reload, read the field values, create a product object, add it to that page's array, and show a new card immediately. The user should be able to add several products in a row.

**Note:** The main-course example creates and displays a new card, but does not yet add its object to the `mainCourses` array. In this task, you should do that extra step. Newly added products are still temporary: the arrays exist only in memory and reset when the page reloads.

### 4. Fix duplicate products in the cart

Currently, `addProductToLS()` creates a new entry every time **“Lägg till”** is clicked. Clicking twice on the same product therefore creates two entries with the same name. Change the function so it finds an existing product by name and **increases its amount**. If the product is not already stored, add it as a new entry. Adding 2 and then 3 of the same product should produce **one cart entry with an amount of 5**. Values from `<input>` and `localStorage` may be strings, so use `Number(...)` when calculating.

The cart page already reads `localStorage` when it loads and after a product is removed. Fix duplicates where products are **saved**, rather than hiding extra cards on the cart page. Removal currently uses the product name and assumes one entry per name.

### 5. Test your work

- The original products appear on all three menu pages when they load.
- New products appear immediately, and several can be added without a reload.
- Product cards keep their styling and their **“Lägg till”** buttons work.
- An empty cart shows no product cards; adding products gives the correct amounts and totals.
- Adding the same product again increases its amount instead of creating another entry.
- **“Ta bort”** (Remove) updates both the cart and its summary.

If you finish early, try requiring a price greater than `0`, preventing empty product names, giving each product a unique `id`, or resetting the form after a product is added.

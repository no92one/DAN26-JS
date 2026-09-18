# Stylesheet tour

All pages link to `style.css`. A CSS rule selects elements and then sets their appearance; for example, `.product` styles elements with `class="product"`. The stylesheet follows the page from general rules to specific components:

1. `*`, `body` and `img` set box sizing, page typography and image behavior.
2. `header`, `nav` and `nav a` style the shared heading and navigation.
3. `main`, `section` and `h2` set the content width and spacing.
4. `.menu` and `.product` lay out menu cards. Flexbox lets cards wrap when space runs out.
5. `.cart`, `.cart-item` and `.cart-summary` style the cart rendered from saved products.
6. `form`, `label`, `input` and `textarea` style the forms and their controls.
7. `footer` styles the shared footer.
8. The `@media (max-width: 700px)` block adjusts navigation and cards for narrower screens.

The `:hover` rules change button and link appearance when pointed at. The `.blue` rule at the end is a small standalone class, useful for demonstrating that a class selector can be reused on different elements.

Try changing one rule at a time in the browser to see which pages and elements it affects. Because this is one shared stylesheet, broad selectors such as `form` and `input` affect both the main-course form and the order form.

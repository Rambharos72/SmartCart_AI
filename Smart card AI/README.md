# SmartCart AI Commerce

SmartCart AI is a student marketplace prototype built with React, PHP, and SQLite. It includes product search, saved items, a local-catalog shopping guide, stock-aware demo checkout, delivery tracking, and downloadable demo receipts. Frontend libraries are included in `assets/vendor`, so the storefront does not need public CDN access.

## Run the project

The PHP server is the supported run mode. It keeps accounts, cart contents, stock, and orders in `database/smart_shop.sqlite`.

1. Install PHP with PDO SQLite enabled.
2. Double-click `Open_SmartCart_AI.bat`, or run the following from this folder:

   ```powershell
   php -S 127.0.0.1:8000 -t .
   ```

3. Open `http://127.0.0.1:8000`.

Do not open `index.html` directly as a `file://` page. Keep the PHP server running while you use the store so accounts, cart, stock, and orders save to SQLite.

After editing `assets/app.jsx`, double-click `Build_SmartCart_AI.bat` to regenerate the browser-ready `assets/app.compiled.js`. Node.js is needed only for rebuilding the frontend; it is not needed to run the PHP storefront.

## Demo accounts

- Customer: `demo@smartshop.test` / `demo123`
- Administrator: `admin@smartshop.test` / `admin123`

Choose **Get code** on the sign-in screen. The demo OTP is displayed in the browser; it is not sent by email or SMS.

## Demo payment and receipts

Checkout supports a local payment simulation for UPI, card, net banking, wallet, or cash on delivery. It does not connect to Razorpay, a bank, or a payment network, and it does not collect real card details or charge money. A successful demo order stores its method and simulated reference, checks and reduces inventory, and generates a PDF demo receipt. Orders can also be tracked from the Orders page.

## Shopping guide

Open **Shopping guide** and enter a request such as “I have ₹5,000 and want headphones.” The guide searches available products in the local database, considers the budget, and explains its matches. This is a local rule-based catalog assistant, not a connected AI service.

## Features

- Customer and administrator accounts with demo OTP and PHP password hashing
- Search, category browsing, sorting, stock availability, and product reviews
- Wishlist, cart quantity controls, and persistent SQLite data
- Local mood, product-type, and budget suggestions
- Address capture, stock-aware checkout, simulated payment methods, and tracking statuses
- Downloadable PDF demo receipts
- Administrator product/category entry, order status management, and store metrics
- Light and dark display themes

## Technology

- Frontend: HTML, CSS, React 18, JSX, Bootstrap 5, Bootstrap Icons (bundled locally)
- Backend: PHP JSON API and PHP sessions
- Database: SQLite through PDO
- PDF generation: jsPDF in the browser

## Project structure

```text
Open_SmartCart_AI.bat  Starts the PHP server and opens the site
Build_SmartCart_AI.bat Rebuilds the browser-ready app after editing JSX
api/db.php             Database connection, schema migration, seed data, helpers
api/index.php          Authentication, catalog, guide, cart, checkout, order, and invoice API
assets/app.jsx         React application
assets/app.compiled.js Browser-ready React application
assets/style.css       Responsive light/dark storefront styles
assets/vendor/         Local React, Babel build tool, Bootstrap, icons, and jsPDF
database/schema.sql    SQLite schema
database/smart_shop.sqlite  Persistent demo database
index.html             Application entry page
```

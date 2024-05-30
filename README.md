# Project Title

LittleFish Shop is an e-commerce application built with React that allows users to browse and purchase products. The application features a cart functionality where users can add products to their cart, view their cart contents, and proceed to checkout intergrated with paypal.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Areas for Improvement](#areas-for-improvement)
- [Future Project Plans](#future-project-plans)
- [Merge Request Review](#merge-request-review)

## Introduction

LittleFish Shop is a user-friendly e-commerce platform designed to provide customers with a seamless shopping experience. Users can explore a wide range of products, add them to their cart, and securely proceed to checkout.

## Features

- Browse through a variety of products available in the shop.
- Add products to the cart with the option to specify the quantity.
- View the contents of the cart, including product details and total amount.
- Remove items from the cart if desired.
- Securely checkout and make payments for the selected items.

## Technologies Used

- React
- Redux
- Material-UI
- TypeScript
- Node.js, MongoDB/Postgress (Future implementation)
- JWT Authentication (Future implementation)
- RESTful API (Future implementation)

## Setup

1. Clone the repository: `git clone https://github.com/Nsovo/cart-project.git`
2. Navigate to the project directory: `cd cart-project`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm start` or `yarn dev`
5. Run `yarn test` to execute tests.

## Usage

1. Browse through the available products by navigating to the shop section.
2. Click on a product to view more details and add it to your cart.
3. Access your cart by clicking on the cart icon and view the items added.
4. Adjust the quantity or remove items from the cart as needed.
5. Proceed to checkout to complete your purchase securely.

## Areas for Improvement
## TODO: How I could have done things better or added if I had more time

- Implement login/create DB, create a user model and user authentication controller, use JWT token.
- Add tab index to assist with keyboard navigation.
-  Make tests work; had an issue that I was trying to debug before I ran out of time. This could have been solved if the implementation was properly fetching data via API.

## Future Project Plans
-  Move the products to a DB.
- Create a RESTful API to get the products (hook the URL, implementation already in place).

## Merge Request Review

 - Products.ts can be implemented better; the current implementation may lead to performance issues due to its size. Consider adding a ticket to fetch from the API.
 - Move payment to SDK and call it via npm.
 - Move export interface Product to its file to be shared and also ensure there is no redundancy with the product in the initial state TS file.


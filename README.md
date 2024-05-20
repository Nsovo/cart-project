# Project Title

LittleFish Shop is an e-commerce application built with React that allows users to browse and purchase products. The application features a cart functionality where users can add products to their cart, view their cart contents, and proceed to checkout intergrated with paypal.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
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
4. Start the development server: `npm start` or `yarn start`
5. Run `yarn test` to execute tests.

## Usage

1. Browse through the available products by navigating to the shop section.
2. Click on a product to view more details and add it to your cart.
3. Access your cart by clicking on the cart icon and view the items added.
4. Adjust the quantity or remove items from the cart as needed.
5. Proceed to checkout to complete your purchase securely.

## Areas for Improvement

1. **User Authentication:**
   - Implement user authentication by creating a user model and authentication controller. Utilize JWT tokens for secure authentication.

2. **Accessibility:**
   - Enhance accessibility by adding tabindex attributes to facilitate keyboard navigation.

3. **Testing:**
   - Resolve testing issues encountered during implementation. Debugging data fetching problems, especially via API, could have been addressed given more time.

## Future Project Plans

1. **Database Migration:**
   - Transition product data to a database for improved scalability and management.

2. **API Development:**
   - Develop a RESTful API to retrieve product information. The necessary infrastructure is already in place; connecting to an external URL will streamline this process.

## Merge Request Review

- **Performance Enhancement:**
   - Consider refactoring `Products.ts` for improved performance, as its current implementation may lead to scalability issues. Consider implementing a ticket system for fetching data from the API.
  
- **SDK Integration:**
   - Propose moving the payment functionality to an SDK and packaging it as an npm module for easier integration and maintenance.
  
- **Code Organization:**
   - To ensure code cleanliness and organization, relocate the `Product` interface to a shared file and eliminate any redundancy with existing product declarations in the initial state file.


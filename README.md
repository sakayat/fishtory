# Fishtory

Fishtory is an e-commerce web application built with Next.js for selling fish products.

## Description

Fishtory offers a modern online shopping experience for fishing enthusiasts and seafood lovers. The platform provides a wide selection of fresh fish, fishing equipment, and accessories with detailed product information, high-quality images, and seamless checkout.

## Features

- Product browsing and filtering
- Shopping cart functionality
- User account management
- Collections showcase
- Responsive design for all devices
- Modern UI with Tailwind CSS

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Slider**: [Splide.js](https://splidejs.com/)
- **UI Components**: Custom components with styled-components

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/sakayat/fishtory.git
cd fishtory
```

### Install Dependencies

Then, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
fishtory/
├── app/                       # Next.js app router
│   ├── (root)/                # Main application pages
│   │   ├── _components/       # Shared components
│   │   │   ├── Header.jsx     # Site header with navigation
│   │   │   ├── Footer.jsx     # Site footer
│   │   │   ├── Hero.jsx       # Homepage hero section
│   │   │   ├── ProductCard.jsx # Product display card
│   │   │   ├── ProductDetails.jsx # Product detailed view
│   │   │   ├── CartItem.jsx   # Shopping cart item
│   │   │   ├── ProductCarousel.jsx # Product showcase carousel
│   │   │   ├── DeliveryService.jsx # Delivery information
│   │   │   ├── Newsletter.jsx # Newsletter signup
│   │   │   ├── OrdersTab.jsx  # User orders dashboard tab
│   │   │   ├── AddressTab.jsx # User address management tab
│   │   │   └── ... (additional components)
│   │   ├── products/         # Product pages
│   │   │   └── [slug]/       # Dynamic product detail pages
│   │   ├── cart/             # Shopping cart page
│   │   ├── collections/      # Product collections pages
│   │   ├── account/          # User account pages
│   │   │   ├── login/        # User login
│   │   │   └── register/     # User registration
│   │   ├── layout.jsx        # Root layout with common UI
│   │   └── page.jsx          # Homepage
│   ├── globals.css           # Global styles
│   ├── layout.js             # Root layout with metadata
│   └── favicon.ico           # Site favicon
├── public/                   # Static assets
│   └── images/               # Image assets
├── package.json              # Dependencies and scripts
├── package-lock.json         # Dependency lock file
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
├── next.config.mjs           # Next.js configuration
├── jsconfig.json             # JavaScript configuration
├── .eslintrc.json            # ESLint configuration
└── .gitignore                # Git ignore file
```

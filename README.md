<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About the Template

I initially created this starter template for my personal use in developing a Fullstack website application. By cloning this template, you can skip reconfiguring the front-end aspect of your project. The technology stack included in this template consists of the following:


- [NuxtJS](https://nuxt.com/docs/getting-started/introduction) - Server-side rendered Vue.js applications.
- [MySQL](https://dev.mysql.com/doc/) - Robust relational database management.
- [Laravel](https://laravel.com/docs/master/installation) - Elegant PHP framework for backend development.
- [Apollo](https://apollo.nuxtjs.org/getting-started/quick-start) - Comprehensive GraphQL client for seamless data management.
- [TailwindCSS](https://tailwindcss.com/docs/installation) - Utility-first CSS framework for rapid UI development.
- [Pinia](https://pinia.vuejs.org/getting-started.html) - Intuitive state management for Vue.js applications.

This full stack web development template leverages NuxtJS for server-side rendering, MySQL for database management, Laravel for backend development, Apollo for GraphQL data management, TailwindCSS for efficient UI design, and Pinia for state management in Vue.js applications.

## How to run the project

1. **Clone the Repository**

    - Use Git to clone the project repository to your local machine.

2. **Environment Configuration**

    - Create a `.env` file at the root of your project.
    - Copy the contents of `.env.example` into your `.env` file and adjust according to your setup.

3. **Install Dependencies**

    - For PHP dependencies, run `composer install`. Avoid using `composer update` to prevent compatibility issues.
    - For JavaScript dependencies, ensure Bun.sh is installed and run `bun install`.

4. **Database Setup**

    - Use XAMPP to manage MySQL and Apache services.
    - Start the Apache and MySQL modules through the XAMPP control panel.

## Running the Development Server

Start your development environment to serve your application:

```bash
bun run serve
bun run dev
```

To use bun runtime instead of node

```bash
bun run --bun dev
```

## Contributing

Thank you for considering contributing to this starter template! In order to contribute to this repository use the following commands according to purpose:

```bash
# To add a feature to the starter template
git flow feature start [feature_branch_name]

# To fix issues within the main branch
git flow feature hotfix [hotfix_branch_name]
```

## Security Vulnerabilities

If you discover a security vulnerability within this template, please send an e-mail to Zeph via [joeseffdl@gmail.com](mailto:joeseffdl@gmail.com). All security vulnerabilities will be promptly addressed.

# Origins

Next.js is a framework built on top of React. You might be asking, Why is there a framework built on top of another framework? Well, as amazing as React is for helping us build applications, it's intentionally missing some things. Things like routing, styling, tooling, and SSR, to name a few. The community has stepped in to create awesome packages for us to build our own frameworks on top of React.

After years of building apps with React, leading opinions and conventions start to form in the community. You can think if Next.js as a framework that incorporates these ideas. The need to install anything on the framework level is almost nonexistent with Next.js. It's also a full-stack framework, allowing us to build out server-side logic and APIs.

## When should you use Next.js?

Next.js is very flexible, with its many different rendering modes, making it ideal for many scenarios. I love to use Next.js for any React-based site/app I am working on for the web. You wouldn't use Next.js to make a component library or package, as it's designed to help you build applications.

Using create-next-app
The fastest way to get started with Next.js is to use create-next-app. It's very simple, just run:

create-next-app@13.1 --experimental-app
Note: Make sure you pin the Next.js version to 13.1

This will install the node_modules you need, and setup a basic app with example code for you to get started. I recommend using this approach when starting a Next.js app.

Manually
If you can't or prefer not to use create-next-app, its still very simple to get started. You only have to install a few modules:

npm i next@latest react@latest react-dom@latest eslint-config-next@latest
You can then create some scripts in your package.json:

````"scripts": {
"dev": "next dev",
"build": "next build",
"start": "next start",
"lint": "next lint"
}```

And then to enable the latest features, we must tell Next.js using the next.config.js file


``` /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
````

At this point, you have everything you need to get started, anything else from create-next-app is either optional or not necessary (like the example code it creates).

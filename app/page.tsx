'use client';

import Login from "./components/login-form/login-form.tsx";
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword';
import HomePage from "./home/page.tsx";
import Navbar from './components/Navbar.js';
import Head from "next/head";
import Footer from "./components/Footer.js";


SuperTokens.init({
  appInfo: {
      apiDomain: "http://localhost:8080",
      apiBasePath: "/auth",
      appName: "...",
  },
  recipeList: [
      Session.init(),
      EmailPassword.init(),
  ],
});


export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

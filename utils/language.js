import Router from "next/router";
import { parseCookies, setCookie } from "nookies";

export const fallbackLanguage = "en";

export const languages = ["en", "ar"];

export const setLanguageCookie = (ctx, language) => {
    setCookie(ctx, "language", language, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
};

export const getLanguageCookie = (ctx) => {
    return parseCookies(ctx).language;
};

export const validateLanguage = (lang) => {
    return languages.includes(lang) ? lang : fallbackLanguage;
};

// Ex: Split en from en-GB  
export const getLanguage = (lang, ctx) => {
    let language = lang.match(/[a-zA-Z\-]{2,10}/g)[0] || fallbackLanguage;
    language = language.split("-")[0];

    return getLanguageCookie(ctx) ?? validateLanguage(language);
};

/*
* The first parameter is the status code which will be 302.
* The second parameter is an object res: containing the Location value.
*/
export const redirectToLanguage = (language = fallbackLanguage, res) => {
    if (res) {
      res.writeHead(302, {
        Location: `/${language}/`,
      });
      
      // The res.end() lets the application know to execute the redirect.
      return res.end();
    }
  
    // when the code is executed Client-Side, we do a Router.push to redirect the user.
    if (language === 'en')
        Router.push(`/`);
    else 
        Router.push(`/${language}/`);
};

export const configureLanguage = ctx => {
    console.log('ctx', ctx)
    const { req, res, asPath, query } = ctx;

    const language = req
        ? req.headers["accept-language"] // On the initial page load, the server determines the user’s language.
        : window.navigator.language; // When we start navigating through our app we will use the window.navigator object and get the user’s language from the client.

    let lang = getLanguage(language, ctx);

    if (asPath === "/") {
        redirectToLanguage(lang, res)
    } else {
        lang = validateLanguage(query.lang);
        setLanguageCookie(ctx, lang);
    }

    return lang;
}
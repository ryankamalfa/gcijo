import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
  const [languages] = useState([
    {
      code: "en",
      name: "English",
    },
    {
      code: "ar",
      name: "Arabic",
    },
  ]);

  var [language, setLanguage] = useState('/ar');

  useEffect(function mount() {
    

    var pathName = window.location.pathname;
    pathName = '/ar' + pathName.slice(0,pathName.length)
    setLanguage(pathName)
  });

  
  const router = useRouter();
  var lang = 'en'
  var name = "English"

  if (router.query.lang == 'en' || router.query.lang == undefined) {
    lang = "ar"
    name = "Arabic"
  }

  return (
    <ul>
      <li>
        <Link as={`${language}`} href={`${language}`}>
          <a>{name}</a>
        </Link>
      </li>
      {/* {languages.map((language) => {
        return (
          <li key={language.code}>
            <Link as={`/${language.code}/`} href={`/ar`}>
              <a>{language.name}</a>
            </Link>
          </li>
        );
      })} */}
    </ul>
  );
};
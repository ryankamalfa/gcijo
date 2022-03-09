import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { basePath } from "../../../next.config";

export default (req) => {
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

  var [language, setLanguage] = useState('ar');
  

  const router = useRouter();
  useEffect(function mount() {
    var pathName = window.location.pathname;
    pathName = pathName.slice(3,pathName.length)
    setLanguage(pathName);
  });

  var lang = 'ar'
  var name = "Arabic"
   
  if (router.query.lang == 'ar' || router.query.lang == undefined) {
    lang = "en"
    name = "English"
  }

  return (
      <ul>
        <li>
          <Link as={`${language}/`} href={`${language}/`}>
            <a>{name}</a>
          </Link>
        </li>
        {/* {languages.map((language) => {
          return (
            <li key={language.code}>
              <Link as={`/${language.code}/`} href={`/[lang]`}>
                <a>{language.name}</a>
              </Link>
            </li>
          );
        })} */}
      </ul>
    );
  };
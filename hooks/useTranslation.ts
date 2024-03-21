"use client";
import { usePathname } from "next/navigation";
import es from "@/languages/es.json";
import maya from "@/languages/maya.json";

const useTranslation = () => {
  const pathname = usePathname();
  console.log(pathname);

  //es and maya are jsons with the translation keys
  const t = (key: string) => {
    console.log(key);
    if (pathname === "/es") {
      return es[key];
    }
    if (pathname === "/maya") {
      return maya[key];
    }
    return key;
  };

  return { t };
};

export default useTranslation;

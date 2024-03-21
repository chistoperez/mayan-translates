"use client";
import useTranslation from "@/hooks/useTranslation";

export default function MayaHome() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("name")}</h1>
      <h1>{t("description")}</h1>
    </div>
  );
}

import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/layout/header";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <I18nProvider locale={locale}>
      <Header />
      {children}
    </I18nProvider>
  );
}

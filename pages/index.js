import PageBase from "../components/PageBase";
import Hero from "../components/Hero";
import SelectedProjects from "../components/SelectedProjects";
import { useState } from "react";

export default function Home() {
  const [shouldScroll, setShouldScroll] = useState(false);
  return (
    <PageBase
      pageTitle="Parssa K"
      shouldScroll={shouldScroll}
      setShouldScroll={setShouldScroll}
    >
      <Hero setShouldScroll={setShouldScroll} />
      <SelectedProjects />
    </PageBase>
  );
}

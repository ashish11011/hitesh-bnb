import { StaticInfoPage } from "@/components/StaticInfoPage";
import { staticPages } from "@/const/staticPages";

export default function Page() {
  return <StaticInfoPage {...staticPages.terms} />;
}

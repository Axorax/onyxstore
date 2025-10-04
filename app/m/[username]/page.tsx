"use client";

import { useSearchParams } from "next/navigation";
import MembershipCardPage from "./page.client.tsx";

const styles = ["blue", "red", "green", "pink", "orange", "jewels"];

export default function Page({ params }: { params: { username: string } }) {
  const searchParams = useSearchParams();
  const queryStyle = searchParams.get("style");
  const style =
    queryStyle && styles.includes(queryStyle) ? queryStyle : "default";

  return <MembershipCardPage username={params.username} material={style} />;
}

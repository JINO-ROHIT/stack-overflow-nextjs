import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1> Suiii</h1>
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
}

import { Users } from "./components/Users";
import { ClickButton } from "./components/ClickButton";

export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold bg-red-500">Hello World</h1>
      <ClickButton />
      <Users />
    </div>
  );
}

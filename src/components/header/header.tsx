import Link from "next/link";
import { Button } from "../ui/button";

type Props = {};

const Header = (props: Props) => {
  return (
    <nav className="min-w-full shadow-lg">
      <Link href="/">
        <Button variant={"ghost"}>Home</Button>
      </Link>
      <Link href="/quiz">
        <Button variant={"ghost"}>Quiz</Button>
      </Link>
    </nav>
  );
};

export default Header;

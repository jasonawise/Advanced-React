import Link from "next/link";

const Home = props => (
  <div>
    Hey!
    <Link href="/sell">
      <a>Sell!</a>
    </Link>
  </div>
);

export default Home;

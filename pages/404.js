import Link from "next/link";

const UnknownPage = () => {
  return (
    <div>
      <h1>Uh Ohhh...</h1>
      <h2>
        This is embarassing but we cant find what you are looking for at this
        location.
      </h2>
      <Link href="/about">
        <p>Learn more about us!</p>
      </Link>
      <Link href="/">
        <p>homepage: Click Here</p>
      </Link>
    </div>
  );
};

export default UnknownPage;

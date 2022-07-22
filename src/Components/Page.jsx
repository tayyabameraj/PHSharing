import { useEffect } from "react";

const Page = ({ title, children, id }) => {
  useEffect(() => {
    document.title = title;
    window.scrollTo(0, 0);
  }, [title]);
  return (
    <main id={id}>
      <div className="container-fluid">{children}</div>
    </main>
  );
};

export default Page;

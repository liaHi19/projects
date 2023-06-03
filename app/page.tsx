import Projects from "@/components/Projects";
import About from "@/components/Top";

const HomePage = () => {
  return (
    <>
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Projects />
    </>
  );
};

export default HomePage;

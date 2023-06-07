import Contact from "@/components/Contact/Contact";
import Projects from "@/components/Projects";
import About from "@/components/Top";

const HomePage = () => {
  return (
    <>
      <About />
      {/* @ts-expect-error Async Server Component */}
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;

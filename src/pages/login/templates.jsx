import StepHeader from "../../components/StepHeader";

export const Base = ({ children, step = "1" }) => {
  return (
    <>
      <main className="flex w-full h-screen">
        <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
          <StepHeader step={step} />
          {children}
        </section>
      </main>
      <footer></footer>
    </>
  );
};

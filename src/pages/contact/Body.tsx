import Channels from "./Channels";
import Form from "./Form";

export default function Body() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:gap-16">
        <Channels />
        <Form />
      </div>
    </section>
  );
}

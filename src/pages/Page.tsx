import "bootstrap/dist/css/bootstrap.min.css";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Page() {

  return (
      <section className="text-center">
        <main className="form-signin w-100 m-auto">
          <Header />
          <Form />
          <Footer />
        </main>
      </section>
  );
}

export default Page

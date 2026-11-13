import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Logo from "./components/ui/Logo";

const asset = (name: string) => `/assets/${name}`;

const projects = [
  {
    title: "SF Entrenamiento Online",
    description: "Venta de cursos online de entrenamiento",
    date: "23/07/2025",
    url: "https://sfentrenamientoonline.com/",
    image: "sf-entrenamiento.webp",
  },
];

const plans = [
  {
    title: "Landing Page",
    price: "Desde: $40.000",
    time: "7–10 días",
    description:
      "Página única diseñada para convertir visitantes en contactos o clientes. Ideal para campañas, servicios específicos o lanzamientos.",
  },
  {
    title: "Web Institucional",
    price: "Desde: $80.000",
    time: "10–21 días",
    description:
      "Sitio web completo para empresas, marcas o profesionales. Transmite confianza, muestra servicios y centraliza la información.",
  },
  {
    title: "E-commerce",
    price: "Desde: $100.000",
    time: "21–30 días",
    description:
      "Tienda online para productos o servicios las 24 hs. Incluye sistema de pagos, integración con Google Maps, gestión de productos y pedidos.",
  },
];

const faqs = [
  "¿Como funcionan sus metodos de pago?",
  "¿Cuánto demora el desarrollo de una web?",
  "¿La página se adapta a celulares?",
  "¿Puedo actualizar el contenido después?",
  "¿Qué necesito para empezar?",
];

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <Header />
      <Hero />

      <section className="clients" id="clientes">
        <img className="clients__mesh" src={asset("clients-pink-wave.svg")} alt="" />
        <div className="page-width">
          <div className="section-heading section-heading--dark">
            <h2>
              <span>Nuestros</span> Clientes
            </h2>
            <p>
              Negocios satisfechos
              <br />
              con nuestro trabajo.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a
                className="project-card gradient-border"
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="project-card__image"
                  src={asset(project.image)}
                  alt={`Vista previa de ${project.title}`}
                  width={800}
                  height={400}
                  loading="lazy"
                />
                <div className="project-card__meta">
                  <h3>{project.title}</h3>
                  <time>{project.date}</time>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>

          <a className="more-link" href="#precios">
            Ver mas
            <span className="plus" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="pricing" id="precios">
        <div className="page-width">
          <div className="section-heading">
            <h2>Nuestros precios</h2>
            <p>
              En este aspecto queremos ser completamente transparentes, pero los precios varían en
              función de la pagina web, ninguno de estos es un precio fijo.
            </p>
          </div>

          <div className="plans">
            {plans.map((plan) => (
              <article className="plan gradient-border" key={plan.title}>
                <div className="plan__details">
                  <h3>{plan.title}</h3>
                  <p>{plan.description}</p>
                </div>
                <div className="plan__price">
                  <img className="plan__divider" src={asset("pricing-divider.svg")} alt="" />
                  <strong>{plan.price}</strong>
                  <span>{plan.time}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" id="preguntas">
        <div className="page-width">
          <h2>Preguntas frecuentes</h2>
          <div className="faq__list">
            {faqs.map((question, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{question}</span>
                    <span className="plus" aria-hidden="true" />
                  </button>
                  <div className="faq-item__answer">
                    <p>
                      {index === 0
                        ? "Trabajamos con un anticipo para iniciar y el saldo al finalizar. Coordinamos cada etapa con total transparencia."
                        : "Cada proyecto se planifica a medida. Contactanos y te enviamos una propuesta clara con tiempos, alcance y próximos pasos."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact page-width" id="contacto">
        <div className="contact__copy">
          <h2>¿Tenes un proyecto?</h2>
          <p>
            Da tu primer paso a<br />
            tu desarrollo web aquí:
          </p>
          <a
            className="outline-button outline-button--square"
            href="mailto:estudio.gleba@gmail.com"
          >
            ¡Empecemos!
          </a>
        </div>
        <a
          className="whatsapp"
          href="https://wa.me/5491100000000"
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <img src={asset("whatsapp-icon.svg")} alt="" />
        </a>
      </section>

      <footer>
        <div className="page-width footer__content">
          <Logo large />
          <a
            className="instagram"
            href="https://instagram.com/estudio.gleba_"
            target="_blank"
            rel="noreferrer"
          >
            <img src={asset("instagram-icon.png")} alt="" />
            <span>estudio.gleba_.</span>
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;

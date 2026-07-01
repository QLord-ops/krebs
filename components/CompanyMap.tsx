const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.1169258018367!2d10.12006211601061!3d51.419278724962986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a4dab66adbbd33%3A0x1e329453b6f3c721!2sKrebs%20Tief%20%26%20Stra%C3%9Fenbau%20GmbH!5e0!3m2!1sde!2sde!4v1659006614273!5m2!1sde!2sde";

const MAP_LINK =
  "https://www.google.com/maps/place/Krebs+Tief+%26+Stra%C3%9Fenbau+GmbH/@51.4192787,10.1200621,17z";

export function CompanyMap() {
  return (
    <div className="contact-map" aria-labelledby="contact-map-title">
      <div className="contact-map-head">
        <div>
          <p className="eyebrow red">Standort</p>
          <h3 id="contact-map-title">So finden Sie uns in Siemerode.</h3>
        </div>
        <a
          className="button button-red"
          href={MAP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          Route planen
        </a>
      </div>

      <div className="contact-map-stage">
        <iframe
          title="Krebs Tief- & Straßenbau GmbH auf Google Maps"
          src={MAP_EMBED_SRC}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

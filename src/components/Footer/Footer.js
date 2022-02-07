import './Footer.css'

const Footer = ({ length }) => {
  return <div>
    {
      !length ? (
        null
      ) : (
        <p>Listenizde {length} öğe var.</p>
      )
    }
      <p>Design & developed by Taşkın Demirel</p>
  </div>;
};

export default Footer;

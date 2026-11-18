import Avatar from '../assets/avatar.webp';
import ASCIIText from './ASCIIText';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column footer-column--left">
          <p>Placeholder</p>
        </div>

        <div className="footer-column footer-column--center">
          <img className="footer-avatar" src={Avatar} alt="Avatar de Malachite01" />
        </div>

        <div className="footer-column footer-column--right">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
        </div>
      </div>

      <div className="footer-logo">
        <ASCIIText
          text="Malachite01"
          asciiFontSize={1}
          colors={["#ff6188", "#fc9867", "#ffd866"]}
          textScale={0.75}
          blocks={0.9}
          waves={.6}
          waveSpeed={1}
          chroma={1}
          tilt={.3}
          hueShift={1}
          scramble={0.6}
          clickRipple={false}
          idle
          interactive={false}
          charset=" .'`^&quot;,:;Il!i~+_-?][}{1)(|/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$"
        />
      </div>

      <p className="footer-disclaimer">
        © 2026 Malachite01 - All rights reserved.
      </p>

      <p className="footer-visits">
        Visits : Placeholder N°
      </p>
    </footer>
  );
}
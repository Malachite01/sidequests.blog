import ASCIIText from './ASCIIText';

export default function Footer() {
  const codeSnippet = 
  `<a href="https://malachite01.github.io/sidequests.blog/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://malachite01.github.io/sidequests.blog/buttons/button-88x31.gif"
      alt="Malachite01, come see my stuff!"
      width="88"
      height="31"
    />
  </a>`

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column footer-column--left">
          <p>Placeholder</p>
        </div>

        <div className="footer-column footer-column--center">
          <img src="https://avatars.githubusercontent.com/Malachite01" alt="https://avatars.githubusercontent.com/Malachite01" width={75} style={{ borderRadius: '50%' }}></img>
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
        © {2026 == new Date().getFullYear() ? 2026 : "2026 - " + new Date().getFullYear()} Malachite01 - All rights reserved.
      </p>

      <br />

      <div className="footer-visits">
        <img onClick={() => navigator.clipboard.writeText(codeSnippet)} src="https://malachite01.github.io/sidequests.blog/buttons/button-88x31.gif" alt="My button" title="Click to copy my silly button :)" style={{ cursor: 'pointer', margin: '0 auto' }} width="88" height="31"/>
        <p className="footer-visits">
          <span style={{ display: 'none' }}>
            {import.meta.env.PROD ? (
              <img src="https://countapi.mileshilliard.com/api/v1/hit/sidequests.blog_view_counter_prod" style={{ display: 'none' }} alt="" />
            ) : null}
          </span>
          <img src="https://countapi.mileshilliard.com/api/v1/get/sidequests.blog_view_counter_prod/shield?text=Visits&bgcolor=33d17a&textcolor=ffffff&style=plastic" alt="Visits"/>
        </p>
      </div>

    </footer>
  );
}
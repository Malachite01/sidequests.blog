export function meta() {
  return [{ title: "Web Rings & Buttons - Sidequests" }];
}

function WebRbuttons() {

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
    <>
      <h1>WebRbuttons</h1>

      <img onClick={() => navigator.clipboard.writeText(codeSnippet)} src="https://malachite01.github.io/sidequests.blog/buttons/button-88x31.gif" alt="My button" title="Click to copy my silly button :)" style={{ cursor: 'pointer',   }} />
    </>
  );
}

export default WebRbuttons;

// const STEAM_ID = '';
const STEAM_ASCII = [
    '░█▀▀░▀█▀░█▀▀░█▀█░█▄█',
    '░▀▀█░░█░░█▀▀░█▀█░█░█',
    '░▀▀▀░░▀░░▀▀▀░▀░▀░▀░▀',
].join('\n');

function Steam() {

    return (
      <div>
        <pre>{STEAM_ASCII}</pre>
      </div>
    );
}

export default Steam;
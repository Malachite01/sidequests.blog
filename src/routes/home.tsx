import ASCIIWallPaper from '../components/ASCIIWallPaper';

function Home() {
  return (
    <>
      <ASCIIWallPaper
        className="ascii-wallpaper"
        glyphs="   .:;-=+*#%@"
        size={16}
        spacing={0.6}
        color="#c2caae"
        speed={0.35}
        clearing={0.3}
        holeQuantity={0.05}
        opacity={0.45}
        variant="field"
      />
      <h1>Home</h1>
    </>
  );
}

export default Home

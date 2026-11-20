// public/emojis/name.webp
// from a name, return the emoji image
export type EmojiProps = {
  name: string;
  size?: number;
};

function Emoji({ name, size }: EmojiProps) {
  return (
    <>
      <img
        src={`https://malachite01.github.io/sidequests.blog/emojis/${name}.webp`}
        alt={name}
        width={size != null ? size : 32}
        title={":" + name}
      />
    </>
  );
}

export default Emoji;
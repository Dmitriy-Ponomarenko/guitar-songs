import styles from "../styles/SongCard.module.css";

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  image: string;
  description: string;
};

type SongCardProps = {
  song: Song;
};

export function SongCard({ song }: SongCardProps) {
  return (
    <article className={styles.card}>
      <img className={styles.image} src={song.image} alt={song.title} />
      <div className={styles.content}>
        <div className={styles.badges}>
          <span>{song.genre}</span>
          <span>{song.mood}</span>
        </div>
        <h4>{song.title}</h4>
        <p className={styles.artist}>{song.artist}</p>
        <p className={styles.description}>{song.description}</p>
      </div>
    </article>
  );
}

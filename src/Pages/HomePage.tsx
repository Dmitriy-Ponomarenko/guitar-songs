import { useMemo, useState } from "react";
import { SongCard } from "../Components/SongCard";
import styles from "../styles/HomePage.module.css";

type Song = {
  id: number;
  title: string;
  artist: string;
  genre: string;
  mood: string;
  image: string;
  description: string;
};

const songs: Song[] = [
  {
    id: 1,
    title: "Дождь",
    artist: "ДДТ",
    genre: "Рок",
    mood: "Тепло",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Глубокая и атмосферная баллада для вечернего выступления.",
  },
  {
    id: 2,
    title: "Кофта пахнет твоим домом",
    artist: "Right Person",
    genre: "Альтернатива",
    mood: "Нежно",
    image:
      "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=80",
    description: "Лиричная и очень узнаваемая песня с характерной подачей.",
  },
  {
    id: 3,
    title: "Просвистела",
    artist: "ДДТ",
    genre: "Рок",
    mood: "Сильно",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description: "Броская и эмоциональная композиция с мощной энергетикой.",
  },
  {
    id: 4,
    title: "Я так соскучился",
    artist: "Порнофильмы",
    genre: "Рок",
    mood: "Откровенно",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Живая и чувственная песня с ярким характером.",
  },
  {
    id: 5,
    title: "Confortas Pero Dañas",
    artist: "Kidd Voodoo",
    genre: "Инди",
    mood: "Ритмично",
    image:
      "https://images.unsplash.com/photo-1458560871784-56d23406c091?auto=format&fit=crop&w=900&q=80",
    description: "Уникальный и стильный номер с плотным ритмом.",
  },
  {
    id: 6,
    title: "Creep",
    artist: "Radiohead",
    genre: "Альтернативный рок",
    mood: "Тревожно",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    description: "Сильная и запоминающаяся песня для эффектного исполнения.",
  },
  {
    id: 7,
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Гранж",
    mood: "Бурно",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description: "Классика с мощной динамикой и узнаваемым звучанием.",
  },
  {
    id: 8,
    title: "Крылья",
    artist: "Nautilus Pompilius",
    genre: "Рок",
    mood: "Возвышенно",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    description:
      "Эмоциональная и яркая песня с большим пространством для исполнения.",
  },
];

export function HomePage() {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<"title" | "artist" | "genre">("title");

  const filteredSongs = useMemo(() => {
    const loweredQuery = query.toLowerCase();
    const items = songs.filter((song) => {
      const matchesQuery =
        song.title.toLowerCase().includes(loweredQuery) ||
        song.artist.toLowerCase().includes(loweredQuery) ||
        song.genre.toLowerCase().includes(loweredQuery);
      return matchesQuery;
    });

    return [...items].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [query, sortBy]);

  return (
    <div className={styles.pageShell}>
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Репертуар для выступлений</p>
          <h1>Тихий шум</h1>
          <p className={styles.heroCopy}>
            Каталог песен для тех, кто хочет быстро выбрать и заказать номер из
            моего набора.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#catalog">
              Смотреть репертуар
            </a>
            <a
              className={styles.secondaryButton}
              href="mailto:hello@example.com"
            >
              Заказать песню
            </a>
          </div>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.heroCardGlow} />
          <p className={styles.cardLabel}>Сегодня в наборе</p>
          <h2>Дождь</h2>
          <p>Сдержанно, глубоко и очень по-настоящему.</p>
        </div>
      </header>

      <main id="catalog" className={styles.catalogSection}>
        <section className={styles.toolbar}>
          <div>
            <h3>Репертуар</h3>
            <p>Ищите по названию, исполнителю или стилю.</p>
          </div>
          <div className={styles.controls}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Поиск по песням"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <label className={styles.selectWrap}>
              <span>Сортировка</span>
              <select
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as "title" | "artist" | "genre")
                }
              >
                <option value="title">По названию</option>
                <option value="artist">По исполнителю</option>
                <option value="genre">По стилю</option>
              </select>
            </label>
          </div>
        </section>

        <section className={styles.songGrid}>
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </section>
      </main>
    </div>
  );
}

import { useMemo } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import PinCard from "../components/PinCard";
import styles from "./Home.module.css";

export default function Home() {
  const { items, category } = useSelector((s) => s.pins);
  const query = useSelector((s) => s.search.query).trim().toLowerCase();

  const filtered = useMemo(() => {
    const result = items.filter((pin) => {
        const matchCat = category === "All" || pin.category === category;

        const matchSearch =
            !query ||
            pin.title.toLowerCase().includes(query) ||
            pin.category.toLowerCase().includes(query);

    return matchCat && matchSearch;
  });

  // Randomize cards
  return [...result].sort(() => Math.random() - 0.5);
}, [items, category, query]);

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <CategoryFilter />
        <div className={styles.masonry}>
          {filtered.map((pin) => (
            <PinCard key={pin.id} pin={pin} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className={styles.empty}>No pins found. Try another search or category.</p>
        )}
      </main>
    </div>
  );
}
'use client';
import styles from "./page.module.css";
import { useState } from "react";
import { TROPICAL_FRUITS } from "@/constants/fruits";
import MySelect from "@/components/my-select";

const tropicalFruits: Array<{value: string; label: string}> = TROPICAL_FRUITS;

export default function Home() {

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <main className={styles.main}>
          <div className='container'>
      <h2>Prueba técnica Selector</h2>
      <MySelect options={tropicalFruits} value={selectedItem} onChange={setSelectedItem}/>
      <h3>La fruta tropical seleccionada es: {selectedItem}</h3>
    </div>
    </main>
  );
}

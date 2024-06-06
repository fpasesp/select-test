'use client';
import styles from "./page.module.css";
import { useState } from "react";
import MySelect from "@/components/my-select";


export default function Home() {

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <main className={styles.main}>
          <div className='container'>
      <h2>Prueba técnica Selector</h2>
      <MySelect onChange={setSelectedItem}/>
      <h3>El número elegido es el: {selectedItem}</h3>
    </div>
    </main>
  );
}

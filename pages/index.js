import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState([]);
  const onSave = () => {
    list.push(input);
    setInput("");
    setList([...list]);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <div>
            <input
              className="js-todo-input"
              placeholder="enter name"
              onChange={(x) => setInput(x.target.value)}
            />
            <button className="js-todo-submit" onClick={onSave}>
              Add
            </button>
          </div>
          <div className={styles.card}>
            <ul>
              {list.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

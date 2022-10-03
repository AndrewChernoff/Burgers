import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Burgers.module.css";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/items");

  const data = await res.json();

  return {
    props: { burgers: data },
  };
};

const Burgers = ({ burgers }) => {

  return (
    <div>
      <h2>Бургеры</h2>
      <Link href="/">Главная страница</Link>

      <div>
        {burgers.map((el) => {
          return (
            <Link href={`/burgers/${el.id}`} key={el.id}>
             <a className={styles.burgerCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={el.image}
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div>
                <h3>{el.name}</h3>
                <p>{el.desc}</p>
                <div>{el.price} руб.</div>
              </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Burgers;

import Image from "next/image";
import styles from "../../styles/Burgers.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/items");
  const data = await res.json();

  const paths = data.map((el) => {
    return { params: { id: el.id } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const data = await res.json();

  return { props: { burger: data } };
};

const Cheesburger = ({ burger }) => {
  console.log(burger);
  return (
    <>
      <div className={styles.burgerCard}>
        <div className={styles.imageContainer}>
          <Image
            src={burger.image}
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div>
          <h3>{burger.name}</h3>
          <p>{burger.desc}</p>
          <div>{burger.price} руб.</div>
        </div>
      </div>
    </>
  );
};

export default Cheesburger;

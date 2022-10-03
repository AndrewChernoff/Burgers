import Head from "next/head";

const Reviews = ({data}) => {

    console.log(data.slice(0, 50))

    const reviews = data.slice(0, 50).map(el => {
       return <div key={el.id}>{el.id}.  {el.body}</div>
      })

  return (
    <>
      <Head>
        <title>Жирные Бургеры | Отзывы</title>
        <meta name="title" content="Отзывы" />
      </Head>
      {reviews}
    </>
  );
};

export async function getServerSideProps() {

  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } };
}

export default Reviews;

import Link from 'next/link' 

const NotFoundPage = () => {
  return (
    <>
      <h1>Что-то пошло не так</h1>
      <Link href='/'>Перейти на главную</Link>
    </>
  );
};

export default NotFoundPage;

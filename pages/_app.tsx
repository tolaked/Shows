import Dashboard from "../components/Dashboard";
import ShowDetails from "../components/ShowDetails";
import "../styles/global.css";

export async function getServerSideProps() {
  // Fetch data from an API
  const res = await fetch("https://api.tvmaze.com/schedule/full");
  const data = await res.json();

  return {
    props: { data },
  };
}

function MyApp({ Component, pageProps }: any) {
  //   console.log("appp", data);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

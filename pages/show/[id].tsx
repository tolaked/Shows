import { GetStaticProps, GetStaticPaths } from "next";

import { Show, ShowSchema } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import ShowInfo from "../../components/ShowInfo";
import DetailsHeader from "../../components/DetailsHeader";
import { useEffect, useState } from "react";
import Cast from "../../components/Staring";

type Props = {
  item?: Show;
  errors?: string;
};

export const getServerSideProps = async ({ params }: any) => {
  // Fetch data using the showId from params
  // const showId = params?.showId;
  console.log("SHOW ID", params);
  const res = await fetch(
    `https://api.tvmaze.com/shows/${params.id}?embed=cast`
  );
  const resJson = await res.json();
  console.log("API CALL", { resJson });
  // const show = ShowSchema.parse(resJson);

  return {
    props: {
      params: {
        showId: params.id,
      },
      show: resJson,
    },
  };
};

const ShowPage = ({ params, show }: any) => {
  console.log({ params, show });

  const cast = show._embedded?.cast.slice(0, 5);
  return (
    <div className="bg-black">
      <DetailsHeader {...show} />
      <main className="my-5 md:my-10 lg:mt-4 pb-20 lg:mb-20">
        <div className="container grid lg:grid-cols-2 gap-10">
          <ShowInfo {...show} />
          {cast && cast.length > 0 && <Cast cast={cast} />}
        </div>
      </main>
    </div>
  );
};

export default ShowPage;

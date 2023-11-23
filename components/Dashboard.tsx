import React, { useEffect, useState } from "react";
import { z } from "zod";
import { EpisodeSchema, Episode as EpisodeType } from "../interfaces";
import List from "./List";
import Header from "./Header";

const Dashboard: React.FC = ({ data }: any) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.tvmaze.com/schedule");
      const data = await res.json();
      const shows = z.array(EpisodeSchema).parse(data);
      setItems(shows);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <List items={items} />
    </div>
  );
};

export default Dashboard;

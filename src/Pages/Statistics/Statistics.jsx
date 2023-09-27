import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const Statistics = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const donetItems = JSON.parse(localStorage.getItem("donates"));
    setData(donetItems);
  }, []);

  let grandTotalDonation = useLoaderData();

  const grandTotal = grandTotalDonation?.reduce(
    (preValue, currentItem) => preValue + currentItem.donate,
    0
  );
  const total = data?.reduce(
    (preValue, currentItem) => preValue + currentItem.donate,
    0
  );

  const pieData = [
    { name: "My Total Donation", uv: "#000", pv: "#fff", value: total },
    {
      name: "Grand Total Donation",
      uv: "#000",
      pv: "#fff",
      value: grandTotal - total,
    },
  ];

  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      {data === null ? (
        <div className="flex flex-col w-full gap-4 md:gap-4 lg:gap-10 mt-10">
          <div>
            <img
              className="mx-auto w-[40%] md:w-[30%] lg:w-[20%]"
              src="https://i.ibb.co/2gpXhjY/Animation-1695795127636.gif"
              alt=""
            />
          </div>
          <div className="flex flex-col w-full items-center gap-7">
            <h1 className="text-[23px] md:text-[30px] lg:text-[30px] text-center italic">
              Looks like you have not made any donations yet
            </h1>
            <Link to="/">
              <button className="btn btn-neutral mx-auto">
                Start Donating
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <ResponsiveContainer
            width="100%"
            height={500}
            className="mt-15 md:mt-10 lg:mt-10"
          >
            <PieChart width={1200} className="mx-auto">
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="40%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#8884d8"
              >
                {data?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {data?.length > 0 && (
            <div className="yourDonation text-center flex justify-center gap-12">
              <div className="flex  items-center gap-3">
                <h1>Your Donation</h1>
                <div className="h-3 w-10 bg-[#FF444A]"></div>
              </div>
              <div className="flex  items-center gap-3">
                <h1>Total Donation</h1>
                <div className="h-3 w-10 bg-[#00C49F]"></div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Statistics;

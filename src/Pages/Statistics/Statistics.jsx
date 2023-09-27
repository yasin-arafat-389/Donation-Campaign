import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const Statistics = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const donetItems = JSON.parse(localStorage.getItem("donates"));
    setData(donetItems);
  }, []);

  let grandTotalDonation = useLoaderData();

  let grandTotalExistingDonation = grandTotalDonation?.length;
  let myTotalDonation = data?.length;

  let percentage = myTotalDonation;

  const pieData = [
    { name: "My Total Donation", value: percentage },
    {
      name: "Grand Total Donation",
      value: grandTotalExistingDonation - percentage,
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

  const initialPieData = [
    { name: "My Total Donation", value: 0 },
    {
      name: "Grand Total Donation",
      value: 100,
    },
  ];

  return (
    <div>
      {data === null ? (
        <>
          <ResponsiveContainer
            width="100%"
            height={500}
            className="mt-15 md:mt-10 lg:mt-10"
          >
            <PieChart width={1200} className="mx-auto">
              <Pie
                data={initialPieData}
                dataKey="value"
                cx="50%"
                cy="40%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={200}
                fill="#00C49F"
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
        </>
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
                fill="#00C49F"
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
        </>
      )}
    </div>
  );
};

export default Statistics;

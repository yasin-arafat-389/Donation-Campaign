/* eslint-disable react/prop-types */

const Card = ({ item }) => {
  return (
    <div className="card shadow-xl cursor-pointer">
      <figure>
        <img className=" w-full h-[200px]" src={item.image} />
      </figure>
      <div
        className="card-body b"
        style={{
          backgroundColor: item.category_card_bg_color,
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
        <div
          className="badge badge-primary border-0 p-3 text-[16px]"
          style={{
            backgroundColor: item.category_bg_color,
            color: item.category_title_color,
          }}
        >
          {item.category}
        </div>

        <h2
          className="text-[17px] font-semibold"
          style={{ color: item.category_title_color }}
        >
          {item.title}
        </h2>
      </div>
    </div>
  );
};

export default Card;

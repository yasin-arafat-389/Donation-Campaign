/* eslint-disable react/prop-types */

const Card = ({ item }) => {
  return (
    <div className="card shadow-xl cursor-pointer">
      <figure>
        <img src={item.image} alt="Shoes" />
      </figure>
      <div
        className="card-body overflow-hidden"
        style={{ backgroundColor: item.category_card_bg_color }}
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
          className="text-[20px] font-semibold"
          style={{ color: item.category_title_color }}
        >
          {item.title}
        </h2>
      </div>
    </div>
  );
};

export default Card;

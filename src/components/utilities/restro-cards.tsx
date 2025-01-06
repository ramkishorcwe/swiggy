import { Link } from "react-router-dom";
import { Restaurant } from "../pages/home";
import LazyLoad from "react-lazyload";
const RestaurantCards = (props: Restaurant) => {
  return (
    <Link
      to={`/restaurant/${props.info.id}`}
      // to={{
      //   pathname: "/restaurant",
      //   search: `?${createSearchParams({
      //     id: props.info.id,
      //   })}`,
      // }}
      className="restaurant-card-container"
      style={{
        width: 200,
        height: 200,
        margin: 20,
        // border: "1px solid red",
      }}
    >
      <LazyLoad height={200}>
        <img
          style={{
            width: "100%",
            height: 120,
            margin: "auto",
            border: "1px solid red",
            borderRadius: "10px 10px 0px 0px",
          }}
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.info.cloudinaryImageId}`}
          alt=""
        />
      </LazyLoad>
      <div>
        <h1
          style={{
            fontWeight: 800,
            fontSize: "20px",
            position: "relative",
            bottom: 35,
            width: 200,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "white",
          }}
        >
          {props?.info?.aggregatedDiscountInfoV3?.header &&
            props.info.aggregatedDiscountInfoV3?.subHeader === undefined &&
            props?.info?.aggregatedDiscountInfoV3?.header}
          {props?.info?.aggregatedDiscountInfoV3?.header &&
            props.info.aggregatedDiscountInfoV3?.subHeader &&
            props?.info?.aggregatedDiscountInfoV3?.header +
              " " +
              props.info.aggregatedDiscountInfoV3?.subHeader}
        </h1>
        <p>{props.info.name}</p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            height: "fit-content",
          }}
        >
          <span style={{ fontSize: "30px" }}>⋆</span>
          <span>{props.info.avgRating} - </span>({props.info.sla.slaString})
        </p>
        <div
          style={{
            width: 200,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.info.cuisines.join(",")}
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCards;

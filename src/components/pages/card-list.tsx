import { useState } from "react";
import { Card, Restaurant } from "./home";
import FoodCard, { IFoodCardDetail } from "../utilities/foodCard";
import "../styles/home.css";
import RestaurantCards from "../utilities/restro-cards";
import {
  firstLetterCapital,
  removeUnderScoreAddSpace,
} from "../utilities/util-function";
interface ICardListProps {
  specificList: Card;
  filter: boolean;
}

function CardList({ specificList, filter = false }: ICardListProps) {
  const [showAll, setShowAll] = useState(false);
  const header = specificList?.card?.card?.header;

  console.log(specificList);
  return (
    <div key={header && header.title} className="food-home-grid">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginTop: 20, fontSize: 20, fontWeight: 800 }}>
          {specificList?.card?.card?.header
            ? specificList?.card?.card?.header.title
            : firstLetterCapital(
                removeUnderScoreAddSpace(specificList?.card?.card?.id || "")
              )}
        </h2>
        {filter && (
          <button
            style={{
              border: "1px solid black",
              background: "grey",
              color: "whitesmoke",
            }}
          >
            Top Rated Restaurant
          </button>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {/* show all if data in card.card.gridElements.infoWithStyle.info */}
        {specificList.card.card.gridElements &&
          specificList.card.card.gridElements.infoWithStyle.info &&
          specificList.card.card.gridElements.infoWithStyle.info.map(
            (foodCard: IFoodCardDetail) => (
              <FoodCard key={foodCard.imageId} {...foodCard} />
            )
          )}

        {/* show all if data in card.card.gridElements.infoWithStyle.restaurants */}
        {specificList.card.card.gridElements &&
        specificList.card.card.gridElements.infoWithStyle.restaurants &&
        specificList.card.card.gridElements.infoWithStyle.restaurants.length >
          4 ? (
          <>
            {showAll === false
              ? specificList.card.card.gridElements.infoWithStyle.restaurants
                  .slice(0, 4)
                  .map((restaurantCard: Restaurant, index: number) => (
                    <div key={index} style={{ display: "flex" }}>
                      {<RestaurantCards {...restaurantCard} />}
                    </div>
                  ))
              : specificList.card.card.gridElements.infoWithStyle.restaurants.map(
                  (restaurantCard: Restaurant, index: number) => (
                    <div key={index} style={{ display: "flex" }}>
                      {<RestaurantCards {...restaurantCard} />}
                    </div>
                  )
                )}
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                width: "fit-content",
                height: "50px",
              }}
              onClick={() => {
                setShowAll(!showAll);
              }}
            >
              {!showAll ? "Show More..." : "Show Less"}
            </button>
          </>
        ) : (
          specificList.card.card.gridElements &&
          specificList.card.card.gridElements.infoWithStyle.restaurants &&
          specificList.card.card.gridElements.infoWithStyle.restaurants.map(
            (restaurantCard: Restaurant, index: number) => (
              <div key={index} style={{ display: "flex" }}>
                {<RestaurantCards {...restaurantCard} />}
              </div>
            )
          )
        )}
      </div>
      <hr />
    </div>
  );
}

export default CardList;

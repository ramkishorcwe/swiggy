import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, IOffers } from "./home";
import SimarUi from "./simar-ui";
import MenuItem from "./menu-items";

interface IData {
  cards: Card[];
  firstOffsetRequest: boolean;
  isQCLink: boolean;
  statusMessage: string;
}

interface IMenuData {
  csrfToken: string;
  data: IData;
  deviceId: string;
  sid: string;
  statusCode: number;
  tid: string;
}

function RestaurantMenu() {
  const [menuData, setMenuData] = useState<IMenuData>();
  const { id } = useParams();
  const card0 = menuData?.data?.cards[0]?.card?.card;
  // const card1 = menuData?.data?.cards[1]?.card?.card;
  const card2 = menuData?.data?.cards[2]?.card?.card;
  const card3 = menuData?.data?.cards[3]?.card?.card;
  // const card4 = menuData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const card4 = menuData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  // const recomanded =menuData?.data?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
  // if (card4) console.log(card4);

  const fetchData = async () => {
    const base: string = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
    const response = await fetch(base);
    const tempRestaurantData = await response.json();
    // console.log(tempRestaurantData);
    // console.log(
    //   tempRestaurantData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
    //     .card.card.itemCards
    // );
    setMenuData(tempRestaurantData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (menuData?.statusCode !== 0) {
    return <SimarUi />;
  }

  return (
    <div>
      <div className="header">
        <h1 className="name">{card0?.text}</h1>
        <div className="restro-detail">
          <p>{card2?.info.isOpen ? "Open" : "Close"}</p>
          <p>
            rating{card2?.info.avgRatingString}({card2?.info.totalRatingsString}
            )
          </p>
          <p>{card2?.info.costForTwoMessage}</p>
          <p>{card2?.info.cuisines.join(",")}</p>
          <p>Outlet: {card2?.info.areaName}</p>
          <p>Delivery Time: {card2?.info.sla.slaString}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: card2?.info.feeDetails.message ?? "",
            }}
          />
          <strong>Available Offers/Deals for you:</strong>
          {card3?.gridElements?.infoWithStyle.offers?.map(
            (offerCard: IOffers, index: number) => (
              <div key={index}>{offerCard.info.header}</div>
            )
          )}
          <strong>Menu:</strong>
          {card4.map((card: any, index: number) => {
            if (card.card.card.title) {
              return (
                <div
                  style={{
                    padding: 20,
                    margin: 10,
                  }}
                  key={index}
                >
                  <h1 style={{ fontSize: 22, fontWeight: 800 }}>
                    {card.card.card.title}
                  </h1>
                  <MenuItem cardCategree={card.card.card.itemCards} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default RestaurantMenu;

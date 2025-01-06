import { Link } from "react-router-dom";
import "./food-card.css";
import { CLOUDNARY_IMAGE_BASE_URL } from "../../../constant";
export interface IAction {
  link: string;
  text: string;
  type: string;
}
export interface IFoodCardDetail {
  accessibility: object;
  action: IAction;
  description: string;
  entityId: string;
  entityType: string;
  id: string;
  imageId: string;
  externalMarketing: object;
  frequencyCapping: object;
}

const FoodCard = (foodCardDetail: IFoodCardDetail) => {
  return (
    <>
      <Link to={foodCardDetail.action.link}>
        <img
          src={CLOUDNARY_IMAGE_BASE_URL + foodCardDetail.imageId}
          alt={foodCardDetail.action.text}
          style={{ width: 80, height: 100 }}
        />
      </Link>
    </>
  );
};
export default FoodCard;

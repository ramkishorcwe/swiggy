import { useEffect, useState } from "react";
// import { FULL_URL } from "../../../constant";
import "../styles/home.css";
import CardList from "./card-list";
import axios from "axios";

export interface Root {
  statusCode: number;
  data: Data;
  tid: string;
  sid: string;
  deviceId: string;
  csrfToken: string;
}

export interface Data {
  statusMessage: string;
  pageOffset: PageOffset;
  cards: Card[];
  firstOffsetRequest: boolean;
  cacheExpiryTime: number;
  nextFetch: number;
}

export interface PageOffset {
  nextOffset: string;
  widgetOffset: WidgetOffset;
}

export interface WidgetOffset {
  NewListingView_category_bar_chicletranking_TwoRows: string;
  NewListingView_category_bar_chicletranking_TwoRows_Rendition: string;
  Restaurant_Group_WebView_SEO_PB_Theme: string;
  collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: string;
  inlineFacetFilter: string;
  restaurantCountWidget: string;
}

export interface Card {
  card: Card2;
}

export interface Card2 {
  card: Card3;
}

export interface Card3 {
  "@type": string;
  header?: Header;
  layout?: Layout;
  imageGridCards?: ImageGridCards;
  id?: string;
  gridElements?: GridElements;
  title?: string;
  sortConfigs?: SortConfig[];
  restaurantCount?: number;
  facetList?: FacetList[];
  message?: string;
  brands?: Brand[];
  androidAppImage?: string;
  androidAppLink?: string;
  iosAppImage?: string;
  iosAppLink?: string;
  cities?: City[];
  citySlug?: string;
  lat?: string;
  lng?: string;
  userAgent?: string;
  gandalfRequest?: string;
  metaInfo?: MetaInfo;
  screenType?: string;
  seoParams?: SeoParams;
  text?: string;
  info: Info2;
  groupedCard: IGroupedCard;
  // groupedCard?: []
}
interface IGroupedCard {
  cardGroupMap: IRegularCard;
}

interface IRegularCard {
  REGULAR: ICard;
}
interface ICard {
  card: Card3[];
}
// groupedCard.cardGroupMap.REGULAR.cards;

export interface Header {
  title: string;
  headerStyling: HeaderStyling;
  action?: Action;
}

export interface HeaderStyling {
  padding: Padding;
}

export interface Padding {
  left: number;
  top: number;
  bottom: number;
}

export type Action = object;
export interface Layout {
  columns: number;
  rows?: number;
  horizontalScrollEnabled?: boolean;
  itemSpacing?: number;
  widgetPadding?: WidgetPadding;
  containerStyle?: ContainerStyle;
  scrollBar?: ScrollBar;
  widgetTheme?: WidgetTheme;
}

export type WidgetPadding = object;

export interface ContainerStyle {
  containerPadding: ContainerPadding;
}

export interface ContainerPadding {
  left: number;
  top?: number;
  right: number;
  bottom: number;
}

export interface ScrollBar {
  scrollThumbColor?: string;
  scrollTrackColor?: string;
  width?: number;
  height?: number;
  scrollStyling?: ScrollStyling;
}

export interface ScrollStyling {
  padding: Padding2;
}

export interface Padding2 {
  top: number;
  bottom: number;
}

export interface WidgetTheme {
  defaultMode: DefaultMode;
  darkMode: DarkMode;
}

export interface DefaultMode {
  backgroundColour: string;
  theme: string;
}

export interface DarkMode {
  theme: string;
  backgroundColour?: string;
}

export interface ImageGridCards {
  info: Info[];
  style: Style;
}

export interface Info {
  id: string;
  imageId: string;
  action: Action2;
  entityType: string;
  accessibility: Accessibility;
  entityId: string;
  frequencyCapping: FrequencyCapping;
  externalMarketing: ExternalMarketing;
  description: string;
}

export interface Action2 {
  link: string;
  text: string;
  type: string;
}

export interface Accessibility {
  altText: string;
  altTextCta: string;
}

export type FrequencyCapping = object;

export type ExternalMarketing = object;

export interface Style {
  width: Width;
  height: Height;
}

export interface Width {
  type: string;
  value: number;
  reference: string;
}

export interface Height {
  type: string;
  value: number;
  reference: string;
}

export interface GridElements {
  infoWithStyle: InfoWithStyle;
}

export interface InfoWithStyle {
  "@type": string;
  restaurants?: Restaurant[];
  theme?: string;
  info?: Info3[];
  style?: Style2;
  widgetType?: string;
  collectionId?: string;
  offers?: IOffers[];
}
export interface IOffers {
  cta: object;
  info: IOfferInfo;
}

export interface IOfferInfo {
  description: string;
  descriptionTextColor: string;
  expiryTime: Date;
  header: string;
  logoBottom: string;
  offerIds: string[];
  offerLogo: string;
  offerTagColor: string;
  offerType: string;
  restId: string;
}

export interface Restaurant {
  info: Info2;
  analytics: Analytics;
  cta: Cta;
  widgetId?: string;
}

//todo if need then add optional properties in this interface
export interface Info2 {
  id: string;
  name: string;
  cloudinaryImageId: string;
  locality: string;
  areaName: string;
  costForTwo: string;
  cuisines: string[];
  avgRating: number;
  parentId: string;
  avgRatingString: string;
  totalRatingsString: string;
  sla: Sla;
  availability: Availability;
  badges: Badges;
  isOpen: boolean;
  type: string;
  badgesV2: BadgesV2;
  aggregatedDiscountInfoV3?: AggregatedDiscountInfoV3;
  differentiatedUi: DifferentiatedUi;
  reviewsSummary: ReviewsSummary;
  displayType: string;
  restaurantOfferPresentationInfo: RestaurantOfferPresentationInfo;
  externalRatings: ExternalRatings;
  ratingsDisplayPreference: string;
  select?: boolean;
  veg?: boolean;
  aggregatedDiscountInfoV2?: AggregatedDiscountInfoV2;
  orderabilityCommunication?: OrderabilityCommunication;
  costForTwoMessage?: string;
  feeDetails: IFeeDetail;
}

export interface IFeeDetail {
  message: string;
}

export interface Sla {
  deliveryTime: number;
  lastMileTravel: number;
  serviceability: string;
  slaString: string;
  lastMileTravelString: string;
  iconType: string;
}

export interface Availability {
  nextCloseTime: string;
  opened: boolean;
}

export interface Badges {
  imageBadges?: ImageBadge[];
  textExtendedBadges?: TextExtendedBadge[];
}

export interface ImageBadge {
  imageId: string;
  description: string;
}

export interface TextExtendedBadge {
  iconId: string;
  shortDescription: string;
  fontColor: string;
}

export interface BadgesV2 {
  entityBadges: EntityBadges;
}

export interface EntityBadges {
  imageBased: ImageBased;
  textBased: TextBased;
  textExtendedBadges: TextExtendedBadges;
}

export interface ImageBased {
  badgeObject?: BadgeObject[];
}

export interface BadgeObject {
  attributes: Attributes;
}

export interface Attributes {
  description: string;
  imageId: string;
}

export type TextBased = object;

export interface TextExtendedBadges {
  badgeObject?: BadgeObject2[];
}

export interface BadgeObject2 {
  attributes: Attributes2;
}

export interface Attributes2 {
  description: string;
  fontColor: string;
  iconId: string;
  shortDescription: string;
}

export interface AggregatedDiscountInfoV3 {
  header: string;
  subHeader: string;
  discountTag?: string;
}

export interface DifferentiatedUi {
  displayType: string;
  differentiatedUiMediaDetails: DifferentiatedUiMediaDetails;
}

export interface DifferentiatedUiMediaDetails {
  mediaType: string;
  lottie: Lottie;
  video: Video;
}

export type Lottie = object;

export type Video = object;

export type ReviewsSummary = object;

export type RestaurantOfferPresentationInfo = object;
export interface ExternalRatings {
  aggregatedRating: AggregatedRating;
  source?: string;
  sourceIconImageId?: string;
}

export interface AggregatedRating {
  rating: string;
  ratingCount?: string;
}

export type AggregatedDiscountInfoV2 = object;

export interface OrderabilityCommunication {
  title: Title;
  subTitle: SubTitle;
  message: Message;
  customIcon: CustomIcon;
}

export type Title = object;

export type SubTitle = object;

export type Message = object;
export type CustomIcon = object;

export interface Analytics {
  context?: string;
}

export interface Cta {
  link: string;
  type: string;
  text?: string;
}

export interface Info3 {
  id: string;
  imageId: string;
  action: Action3;
  entityType: string;
  accessibility: Accessibility2;
  entityId: string;
  frequencyCapping: FrequencyCapping2;
  externalMarketing: ExternalMarketing2;
  description: string;
}

export interface Action3 {
  link: string;
  text: string;
  type: string;
}

export interface Accessibility2 {
  altText: string;
  altTextCta: string;
}

export type FrequencyCapping2 = object;

export type ExternalMarketing2 = object;

export interface Style2 {
  width: Width2;
  height: Height2;
  layoutAlignment?: string;
}

export interface Width2 {
  type: string;
  value: number;
  reference: string;
}

export interface Height2 {
  type: string;
  value: number;
  reference: string;
}

export interface SortConfig {
  key: string;
  title: string;
  selected?: boolean;
  defaultSelection?: boolean;
}

export interface FacetList {
  label: string;
  id: string;
  selection: string;
  facetInfo: FacetInfo[];
  viewType: string;
  subLabel?: string;
  canSearch?: boolean;
  openFilter?: boolean;
}

export interface FacetInfo {
  label: string;
  id: string;
  analytics?: Analytics2;
  openFilter?: boolean;
}

export type Analytics2 = object;

export interface Brand {
  text: string;
  link: string;
}

export interface City {
  text: string;
  link: string;
}

export interface MetaInfo {
  pageType: string;
  pageTitle: string;
  pageMetaDescription: string;
  pageKeywords: string;
}

export interface SeoParams {
  apiName: string;
  seoUrl: string;
  pageType: string;
}

const Home = () => {
  const [allCardsData, setAllCardsData] = useState([]);

  const FetchData = async () => {
    // axios
    //   .get(
    //     "/v5?lat=26.8829258&lng=75.7954657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //   )
    //   .then((response: any) => {
    //     setAllCardsData(response?.data?.cards);
    //     const dataWith = response?.data?.cards.filter((item: Card) => {
    //       if (
    //         item?.card?.card?.gridElements?.infoWithStyle &&
    //         item.card.card.gridElements.infoWithStyle
    //       ) {
    //         if (
    //           item?.card?.card?.gridElements?.infoWithStyle?.info !== undefined
    //         ) {
    //           return { ...item.card.card.gridElements.infoWithStyle.info };
    //         } else if (
    //           item.card.card.gridElements.infoWithStyle.restaurants !==
    //           undefined
    //         ) {
    //           return {
    //             ...item.card.card.gridElements.infoWithStyle.restaurants,
    //           };
    //         }
    //       }
    //     });
    //     console.log("dataWith", dataWith);
    //     setAllCardsData(dataWith);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    try {
      const response = await axios.get("/v5", {
        params: {
          lat: 26.8829258,
          lng: 75.7954657,
          "is-seo-homepage-enabled": true,
          page_type: "DESKTOP_WEB_LISTING",
        },
      });
      setAllCardsData(response?.data?.data.cards);
      console.log(response.data.data.cards);
      const dataWith = response?.data?.cards.filter((item: Card) => {
        if (
          item?.card?.card?.gridElements?.infoWithStyle &&
          item.card.card.gridElements.infoWithStyle
        ) {
          if (
            item?.card?.card?.gridElements?.infoWithStyle?.info !== undefined
          ) {
            return { ...item.card.card.gridElements.infoWithStyle.info };
          } else if (
            item.card.card.gridElements.infoWithStyle.restaurants !== undefined
          ) {
            return {
              ...item.card.card.gridElements.infoWithStyle.restaurants,
            };
          }
        }
      });
      console.log("dataWith", dataWith);
      setAllCardsData(dataWith);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
    // const response = await fetch(
    //   "?lat=26.8829258&lng=75.7954657&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const tempRestaurantData = await response.json();
    // console.log(tempRestaurantData?.data?.cards);
    // setAllCardsData(tempRestaurantData?.data?.cards);
  };

  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div className="food-home-contain" style={{ margin: "0px 100px" }}>
        {allCardsData.map((specificGrid: Card, index: number) => (
          <div key={index} className="food-home-grid" style={{ padding: 20 }}>
            <CardList filter={true} specificList={specificGrid} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;

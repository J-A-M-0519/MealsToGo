import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  elevation: 5;
  backgroundcolor: Ivory;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 15px;
  backgroundcolor: Ivory;
`;

const Title = styled.Text`
  padding: 16px;
  font-size: 24px;
  color: black;
  font-weight: bold;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Some Address",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
``;

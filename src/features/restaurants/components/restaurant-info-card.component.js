import React from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";

import { star } from "../../../../assets/star";

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantCard = styled(Card)`
  elevation: 5;
  color: ${(props) => props.theme.colors.brand.secondary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.brand.secondary};
`;

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: ${(props) => props.theme.fontWeights.medium};
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
      <Info>
        <Title>{name}</Title>
        <SvgXml xml={star} width={20} height={20} />
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
``;

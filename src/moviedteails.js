import React from "react";
import { Button, Text } from "react-native";
import { Card } from "@rneui/base";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";

const Moviedteails = ({ navigation, route }) => {
  const movie = route.params.movie;
  // alert(JSON.stringify(route.params.movie));
  return (
    <Card>
      <CardImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        }}
      ></CardImage>
      <CardTitle style={{ marginTop: 20 }}>{movie.original_title}</CardTitle>
      <CardTitle style={{ marginTop: 20 }}>{movie.id}</CardTitle>
      <Button
        title="Download"
        onPress={() => {
          navigation.navigate("form");
        }}
      ></Button>
    </Card>
  );
};

export default Moviedteails;

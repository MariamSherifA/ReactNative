import React from "react";
import { Text } from "@rneui/themed";
import { Card } from "@rneui/base";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";
import { Button } from "react-native";
import { View, ScrollView } from "react-native";

const Home = ({ navigation }) => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        // "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
        "https://api.themoviedb.org/3/movie/popular?api_key=25f5a4ee6de30deb92465cb971c9eb02&language=en-US&page=1"
      )
      .then((res) => {
        // alert(JSON.stringify(res.data.results));
        setmovies(res.data.results);
      });
  }, []);
     alert(movies);
  return (
    // <Text>Home</Text>
    <ScrollView>
      <View>
        {movies.map((movie, index) => {
          return (
            <Card key={index}>
              <CardImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              ></CardImage>
              <CardTitle style={{ marginTop: 10 }}>
                {movie.original_title}
              </CardTitle>
              <Button
                title="See Deails"
                onPress={() => {
                  navigation.navigate("Details", { movie: movie });
                }}
              ></Button>
            </Card>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;

import axios from "axios";
import {React, useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";
import {  Card, Button, Icon } from "@rneui/themed";


export default function Movies({navigation}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => alert(err));
  }, []);

  return (
    <ScrollView>
      {movies.map((movie, index) => {
        return (
          <Card key={index}>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Image
              source={{
                uri: "https://images.indianexpress.com/2021/08/LCDP.jpg",
              }}
            />
            <Text style={{ marginBottom: 14 }}>{movie.overview}</Text>
            <Button title="More Details"  onPress={() => navigation.navigate("Movie_Details",{id:movie.id})} />
          </Card>
        );
      })}
    </ScrollView>
  );
}



 
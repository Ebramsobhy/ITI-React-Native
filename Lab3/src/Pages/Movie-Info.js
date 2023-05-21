import axios from "axios";
import { React, useEffect, useState } from "react";
import { Text, ScrollView } from "react-native";


export default function MovieDetails({ route }) {
    const id = route.params.id;
    
    const [movie, setMovie] = useState({});
    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`
        )
        .then((res) => setMovie(res.data))
        .catch((err) => alert(err));
    }, [id]);

    return (
      <ScrollView>
        <Text>{movie.title}</Text>
        <Text>{movie.overview}</Text>
      </ScrollView>
    );

}

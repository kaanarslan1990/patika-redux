import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Masonry from "react-masonry-css";
import "./styles.css";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const error = useSelector((state) => state.characters.error);
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchCharacters());
  }, [dispatch]);

  

  if (error) {
    return <Error />;
  }

  return (
    <div>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character,index) => (
          <div key={index}>
            <img
              src={character.img}
              alt={character.name}
              className="character"
            />
            <div className="char_name">{character.name}</div>
          </div>
        ))}
      </Masonry>

      <div style={{textAlign: 'center', padding: "20px 0 40px 0"}}>
      {isLoading && <Loading />}
      {hasNextPage && !isLoading && (<button onClick={() => dispatch(fetchCharacters(nextPage))}>Load More ({nextPage})</button>)}
      {!hasNextPage && <div>No more characters!</div>}
        
      </div>
    </div>
  );
}

export default Home;

import NavBar from "./NavBar";
import SearchRegion from "./SearchRegion";
import { useEffect, useState } from "react";
import AlbumResultElement from "./AlbumResultElement";
function Home() {
  const [albumQuery, setAlbumQuery] = useState("");
  const [albumSearchList, setAlbumSearchList] = useState<React.ReactNode[]>([]);
  const [search, setSearch] = useState(false);

  const getAlbumSearch = async (searchQuery: string) => {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(
        searchQuery
      )}&type=album&limit=5&offset=0`,
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer <TOKEN>",
        },
      }
    );
    return await response.json();
  };

  const handleSearchClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSearch(true);
    setAlbumSearchList([]);
  };

  useEffect(() => {
    if (search) {
      getAlbumSearch(albumQuery)
        .then((json) => {
          json.albums.items.forEach((album: any) => {
            setAlbumSearchList((prev) =>
              prev.concat(
                <AlbumResultElement
                  albumImageSrc={album.images[1].url}
                  albumName={album.name}
                  albumArtist={album.artists[0].name}
                  albumId={album.id}
                  albumRd={album.release_date}
                ></AlbumResultElement>
              )
            );
          });
        })
        .catch((err) => console.log(err));
      setSearch(false); // Reset search to false after the API call is done
    }
  }, [search, albumSearchList]); // Use search as a dependency for the useEffect hook
  return (
    <>
      <NavBar
        searchQuery={albumQuery}
        setSearchQuery={setAlbumQuery}
        searchOnClick={handleSearchClick}
      ></NavBar>
      <SearchRegion albumSearch={albumSearchList}></SearchRegion>
    </>
  )
}

export default Home;
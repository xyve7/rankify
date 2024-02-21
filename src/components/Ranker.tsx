import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DragAndDropList from "./DragAndDropList";
import { arrayMoveImmutable } from "array-move";
import { arrayMove } from "react-sortable-hoc";

function Ranker() {
  const { state } = useLocation();
  const [tracks, setTracks] = useState<string[]>([]);
  const [tracksStatus, setTracksStatus] = useState(false);

  const getTrackList = async (albumId: string) => {
    const response = await fetch(
      `https://api.spotify.com/v1/albums/${albumId}/tracks?limit=50&offset=0`,
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
  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number; }) => {
    setTracks(prev => arrayMoveImmutable(tracks, oldIndex, newIndex));
  };
  useEffect(() => {
    if (!tracksStatus) {
      getTrackList(state.id).then((json) => {
        let temp: string[] = [];
        json.items.forEach((item: any) => {
          temp.push(item.name);
          console.log(item);
        })
        let unique = new Set(temp);
        setTracks([...unique]);

      })
        .catch((err) => console.log(err));;
      setTracksStatus(false);
    }
  }, []);
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob(tracks.map((value, index) => `${index + 1}. ${value}\n`), { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "ranking.txt";
    document.body.appendChild(element);
    element.click();
  };
  return (
    <>
      <div className="bg-dark border-bottom border-body" data-bs-theme="dark">
        <div>
          <p className="fs-1 text-center fw-bold text-bg-dark">Rank {state.name}!</p>
          <DragAndDropList items={tracks} onSortEnd={onSortEnd} />
        </div>
        <div className="d-grid gap-2 col-1 mx-auto">
          <button type="button" className="btn btn-primary" onClick={downloadTxtFile}>Download!</button>
        </div>
      </div>
    </>
  );
}

export default Ranker;

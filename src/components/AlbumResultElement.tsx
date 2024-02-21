import { Link } from "react-router-dom";
interface Props {
  albumImageSrc: string;
  albumName: string;
  albumArtist: string;
  albumId: string;
  albumRd: string;
}

function AlbumResultElement({
  albumImageSrc,
  albumName,
  albumArtist,
  albumId,
  albumRd,
}: Props) {
  return (
    <>
      <div className="card bg-dark mb-3">
        <div className="row g-0" id="sortable">
          <div className="col-md-2">
            <img src={albumImageSrc} className="img-fluid rounded-start"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{albumName}</h5>
              <p className="card-text">{albumArtist}</p>
              <p className="card-text">
                <small className="text-body-secondary">{albumRd}</small>
              </p>
              <Link to="/ranker" state={{id: albumId, name: albumName}}>
                <a href="#" className="btn btn-primary">Rankify!</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlbumResultElement;

interface Props {
  albumSearch: React.ReactNode[];
}
function SearchRegion({ albumSearch }: Props) {
  return (
    <>
      <div className="bg-dark border-bottom border-body" data-bs-theme="dark">{albumSearch}</div>
    </>
  );
}

export default SearchRegion;

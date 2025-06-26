
function Map() {
  return (
    <div className="w-full rounded-md overflow-hidden shadow h-full">
      <iframe
        title="map"
        src="https://www.google.com/maps?q=تهران،%20جردن&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "320px" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;

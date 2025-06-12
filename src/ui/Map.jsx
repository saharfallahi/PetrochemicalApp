
function Map() {
  return (
    <div className="col-span-1 md:col-span-1 w-full rounded-xl overflow-hidden shadow h-full">
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

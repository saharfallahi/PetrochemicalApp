
function Tags({tags}) {
  return (
    <div className="bg-secondary-100 rounded-xl shadow p-4">
          <h3 className="font-bold mb-2">برچسب ها</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span key={idx} className="badge badge--primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
  )
}

export default Tags
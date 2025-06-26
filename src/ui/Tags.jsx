
function Tags({tags}) {
  return (
    <div className="bg-secondary-0 rounded-md border border-secondary-100 shadow-md p-4">
          <h3 className="font-bold mb-4">برچسب ها</h3>
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

function ServiceContent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} className="text-sm md:text-base leading-6 md:leading-8"/>;
  }

export default ServiceContent
  
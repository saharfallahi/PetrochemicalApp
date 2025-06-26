
function ServiceContent({ html,className }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} className={className}/>;
  }

export default ServiceContent
  
import './index.css'

const EachElement = props => {
  const {eachValue} = props
  const {name, length} = eachValue
  return (
    <li className="list-styling">
      <p className="para-styling">
        {name}:{length}
      </p>
    </li>
  )
}

export default EachElement

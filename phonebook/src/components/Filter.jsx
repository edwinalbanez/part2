const Filter = ({filter, onChange}) => {
  return (
    <div>
      Filter shown with: {" "}
      <input type="text" value={filter} onChange={onChange} />
    </div>
  )
}

export default Filter
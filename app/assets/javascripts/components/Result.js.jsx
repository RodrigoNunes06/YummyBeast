var Result = React.createClass({
  getInitialState: function () {
    return {
      searchInput: "",
      listOfRestaurants: []
    }
  },

  render: function () {
    return (
      <div className="container">
        <div className="row" >
          Yummy Beast found the following restaurants :D
        </div>
      </div>
    )
  }
})

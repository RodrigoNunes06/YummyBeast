var Form = React.createClass({
  render: function () {
    return (
      <div className="container">
        <form className="navbar-form navbar-left search" role="search" onSubmit={this.props.onHandleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" style={{width:300}} placeholder="Search for a restaurant or food..." onChange={this.props.onUpdateSearch} value={this.props.searchInput}></input>
            <button type="submit" className="btn btn-default">Search</button>
          </div>
        </form>
      </div>
    )
  }
})
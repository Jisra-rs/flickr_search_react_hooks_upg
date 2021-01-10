import React, {Component} from 'react';
class SearchTool extends Component{
  constructor (props){
    super(props);

    this.state = { search: ''}
  }

  handleChange = ({ target }) => {
    const { name, value } = target
    this.setState({ search : value});
    console.log(this.state.search);
  }

    render() {
      const { handleSearch } = this.props
      const { search } = this.state

        return(
            <>
              <div className="_divSearch">
                  <div className="_searchObj">
                      <input 
                        type="text" 
                        name="_pic_search" 
                        id="_text_label" 
                        value={ search }
                        onChange={ this.handleChange }
                        placeholder="Search photos"/>
                      <input type="button" id="_search" onClick={ () => handleSearch (search) } value="Search"/>
                  </div>
              </div>
            </>
        );
    }
}

export default SearchTool;
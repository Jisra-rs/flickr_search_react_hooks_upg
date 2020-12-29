import React, {Component} from 'react';

const validate = values => {
  const errors = {}
  if (!values._pic_search) {
    errors.text = 'El campo se encuentra vacío y se requiere para iniciar la búsqueda'
  }
  return errors
}

class SearchTool extends Component{
  state = {
    errors: {}
  }

  handleChange = ({ target }) => {
    console.log(target);
    const { name, value } = target
    this.setState({ [name] : value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { errors, ...sinerrors } = this.state
    const result = validate(sinerrors)

    this.setState({ errors: result })
    if (!Object.keys(result).length) {
      // Enviar el formulario 
      console.log('Formulario valido');
      // e.target.reset()
    }
    console.log('Prevenido');
  }

    render() {
      const { errors } = this.state
        return(
            <div className="_divSearch">
                <div className="_searchObj">
                    <input type="text" name="_pic_search" id="_text_label" onChange={ this.handleChange }  placeholder="Search photos"/>
                    { errors._pic_search && errors._pic_search}
                    <input type="button" id="_search" onClick={ this.handleSubmit } value="Search"/>
                </div>
            </div>
        );
    }
}

export default SearchTool;
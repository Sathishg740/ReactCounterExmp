import React from 'react'
const useNameFormState = () => {
    const init = {
      name: '',
      surname: ''
    }
    const [values, setValues] = React.useState(init)
    return [values, setValues]
  }
  
function CustomHook(props) {
    const [values, setValues] = useNameFormState();
  
    const handleChange = (event) => {
      setValues({...values, [event.target.name]: event.target.value});
    }
  
    const handleSubmit = (event) => {
      alert('form submited: ' + JSON.stringify(values));
      event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
        <label>Name: <input type="text" value={values.name} name="name" onChange={handleChange} /></label><br />
        <label>Surname: <input type="text" value={values.surname} name="surname" onChange={handleChange} /></label>
        <input type="submit" value="Submit" />
      </form>
        </div>
    )
}

export default CustomHook


const serverDown = () => ({type: 'NO_RESPONSE'})

export const serverError = (errors) => {
	return {
		type: 'SERVER_ERROR',
		errors
	}
}

const emptyErrors = ()=> ({type: 'NO_ERRORS'})

export const clearErrors =() =>{
  return dispatch =>{
    dispatch(emptyErrors())
  }
}

export const errorHandler = (error, dispatch) =>{
	if (error.response) {
    const errors = logIT(error.response.data.errors)
    dispatch(serverError(errors));
  } else if (error.request) {
    dispatch(serverDown())
  } else {
    alert('Something went wrong please rephresh and try again');
  }
};

function logIT(errors) {
	var results = []
  for (var k in errors){
    if (errors.hasOwnProperty(k)) {
        results = [...results, `${k}: ${errors[k]}`];
    }
  }
  return results
}
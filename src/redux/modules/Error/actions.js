export const serverDown = () => ({type: 'NO_RESPONSE'})

export const serverError = (errors) => {
	return {
		type: 'SERVER_ERROR',
		errors
	}
}

export const errorHandler = (error, dispatch) =>{
	if (error.response) {
    const errors = logIT(error.response.data.errors)
    dispatch(serverError(errors));
  } else if (error.request) {
    dispatch(serverDown())
  } else {
    alert('Something just broke and I dont know how to fix it');
  }
};

function logIT(errors) {
	var results = []
  for (var k in errors){
    if (errors.hasOwnProperty(k)) {
        results = [...results, errors[k]];
    }
  }
  return results
}
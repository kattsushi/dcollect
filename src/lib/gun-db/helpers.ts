export const handleAuthResponse = (response: any) => {
	if (Object.keys(response).includes('err')) {
		if (response.err === 'Password too short!') {
			return 'error';
		}

		if (response.err === 'Wrong user or password.') {
			// customAlert("no-user");
			return 'error';
		}

		if (response.err === 'User is already being created or authenticated!') {
			return 'error';
		}

		if (response.err === 'User already created!') {
			return 'error';
		}
		if (response.err === 'User cannot be found!') {
			return 'error';
		}
	}

	return 'correct';
};

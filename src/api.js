export const serverLogin = (email, password) => {

	const ops = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({email, password})
	};


	return fetch(`https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`, ops).then(res => res.json())

}

export const serverRegister = (email, password, name) => {

	const ops = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({email, password, name})
	};

	console.log(ops)


	return fetch(`https://loft-taxi.glitch.me/register?email=${email}&password=${password}&name=${name}`, ops).then(res => res.json())

}
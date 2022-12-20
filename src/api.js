
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

export const fetchAddresses = () => {
	const ops = {
		method: 'GET',
	};
	return fetch('https://loft-taxi.glitch.me/addressList', ops).then(res => res.json())
}


export const fetchRoute = (address1, address2) => {

	const ops = {
		method: 'GET',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({address1, address2})
	};
	console.log(ops)
	return fetch(`https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`, ops).then(res => res.json())
}

export const fetchCard = () => {
	const ops = {
		method: 'GET',
		
	};
	return fetch(`https://loft-taxi.glitch.me/card?token=AUTH_TOKEN`, ops).then(res => res.json())
}

export const regCard = (cardNumber, expiryDate, cardName, cvc,token) => {
	const ops = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({cardNumber, expiryDate, cardName, cvc, token})
	};
	return fetch(`https://loft-taxi.glitch.me/card?cardNumber=${cardNumber}&expiryDate=${expiryDate}&cardName=${cardName}&cvc=${cvc}&token=${token}`, ops).then(res => res.json())
}
const https = require("https");

function createUsers() {
	let i = 0, len = 15;
		while (i < len) {
			const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
			let userName = '';
			for(let ii=0; ii<15; ii++){
				userName += chars[Math.floor(Math.random() * chars.length)];
			}
		
			let data = JSON.stringify({
				profile: {
					firstName: userName,
					lastName: userName,
					email: userName + '@testemail.com',
					login: userName + '@testemail.com',
				}
			});
		
			const options = {
				hostname: 'liviuvoicu.okta.com',
				port: 443,
				path: '/api/v1/users?activate=false',
				method: 'POST',
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Authorization": "SSWS 00FPZLLdGZZ28DNYRAhasZOm8eTH2Rz7s9YJAiHLjO"
				}
			};
		
			const req = https.request(options, res => {
				let dataQueue = '';
				res.on('data', (d) => {
					console.log(data)
					dataQueue += d;
					console.log(dataQueue);
				});
				req.on('error', error => {
					console.log(error);
				});
			});
			req.write(data);
			req.end();
	  
			i++
		}
}
createUsers();
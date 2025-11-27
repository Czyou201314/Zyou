// 水平仪
function throttle(method, delay, duration) {
	let timer = null,
		begin = new Date();
	return function () {
		let context = this,
			args = arguments,
			current = new Date();;
		clearTimeout(timer);
		if (current - begin >= duration) {
			method.apply(context, args);
			begin = current;
		} else {
			timer = setTimeout(function () {
				method.apply(context, args);
			}, delay);
		}
	}
}
let gradienter = document.getElementById('gradienter').getContext('2d')
gradienter.font = '110px sans-serif'
gradienter.textAlign = 'center'
gradienter.textBaseline = 'middle'
let positiveCircleCenter = [320, 320]
let negativeCircleCenter = [320, 320]
let positiveCircle, negativeCircle
let getIt = false
let colorStr1 = "";
			let randomArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
			for (let i = 0; i < 6; i++) {
				colorStr1 += randomArr[Math.ceil(Math.random() * (13 - 0) + 0)];
			}
function drawGradienterCircles(angle) {
	if (getIt) {
		return
	}
	if (angle < .2) {
		angle = 0
	} else if (angle > 1) {
		angle = parseInt(angle)
	} else {
		angle = 1
	}
	gradienter.clearRect(0, 0, 640, 700)
	gradienter.globalCompositeOperation = 'xor'
	if (angle == 0) {
		gradienter.fillStyle = '#9ff'
		getIt = true
		setTimeout(function () {
			getIt = false
		}, 500)
	} else {
		gradienter.fillStyle = colorStr1
	}
	//gradienter.fillRect(0, 0, 640, 700)
	gradienter.beginPath()
	gradienter.arc(positiveCircleCenter[0], positiveCircleCenter[1], 130, 0, 160)
	gradienter.closePath()
	gradienter.fill()
	gradienter.beginPath()
	gradienter.arc(negativeCircleCenter[0], negativeCircleCenter[1], 126, 0, 160)
	gradienter.closePath()
	gradienter.fill()
	gradienter.fillText(angle + '°', 330, 325)
}
drawGradienterCircles(0)
function deviceOrientationListener(event) {
	let dx = 120 * Math.tan(event.gamma / 180 * Math.PI)
	let dy = 120 * Math.tan(event.beta / 180 * Math.PI)
	positiveCircleCenter = [320 + dx, 320 + dy]
	negativeCircleCenter = [320 - dx, 320 - dy]
	let gamma = event.gamma / 360 * Math.PI
	let beta = event.beta / 360 * Math.PI
	let sinGamma = Math.sin(gamma)
	let cosGamma = Math.cos(gamma)
	let sinBeta = Math.sin(beta)
	let cosBeta = Math.cos(beta)
	let angle = Math.acos(cosGamma * cosBeta / (Math.sqrt(Math.pow(cosBeta * sinGamma, 2) + Math.pow(sinBeta, 2) + Math.pow(cosBeta * cosGamma, 2))))
	drawGradienterCircles(angle / Math.PI * 360)
}
if (window.DeviceOrientationEvent) {
	window.addEventListener('deviceorientation', throttle(deviceOrientationListener, 10, 30))
} else {
	alert("当前没启用X5内核，不支持重力感应！")
}
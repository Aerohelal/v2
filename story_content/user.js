function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6q1quuSe9hw":
        Script1();
        break;
      case "5mww9EODFNl":
        Script2();
        break;
      case "5YcqVuZidim":
        Script3();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzAO7QCKwS--jYDTc7amG6QvbdaepY3u1qOqOyMQdcRgG8ucHmlc50ArF8rZdVgbvI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q1attempts:player.GetVar("v2q1attempts"),v2q1answeredcorrect:player.GetVar("v2q1answeredcorrect"),v2q2attempts:player.GetVar("v2q2attempts"),v2q2answeredcorrect:player.GetVar("v2q2answeredcorrect"),v2q3attempts:player.GetVar("v2q3attempts"),v2q3answeredcorrect:player.GetVar("v2q3answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbzAO7QCKwS--jYDTc7amG6QvbdaepY3u1qOqOyMQdcRgG8ucHmlc50ArF8rZdVgbvI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q1attempts:player.GetVar("v2q1attempts"),v2q1answeredcorrect:player.GetVar("v2q1answeredcorrect"),v2q2attempts:player.GetVar("v2q2attempts"),v2q2answeredcorrect:player.GetVar("v2q2answeredcorrect"),v2q3attempts:player.GetVar("v2q3attempts"),v2q3answeredcorrect:player.GetVar("v2q3answeredcorrect")})
	}
	)
}

function Script3()
{
  const url="https://script.google.com/macros/s/AKfycbzAO7QCKwS--jYDTc7amG6QvbdaepY3u1qOqOyMQdcRgG8ucHmlc50ArF8rZdVgbvI/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({v2q1attempts:player.GetVar("v2q1attempts"),v2q1answeredcorrect:player.GetVar("v2q1answeredcorrect"),v2q2attempts:player.GetVar("v2q2attempts"),v2q2answeredcorrect:player.GetVar("v2q2answeredcorrect"),v2q3attempts:player.GetVar("v2q3attempts"),v2q3answeredcorrect:player.GetVar("v2q3answeredcorrect")})
	}
	)
}


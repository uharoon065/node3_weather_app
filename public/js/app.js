/*
fetch('http://puzzle.mead.io/puzzle')
.then(res=>  res.json())
.then(data=> {
    console.log(data);
})
*/
const btn = document.querySelector('button')
const weatherForm =  document.querySelector('form')
const searchLocation = document.querySelector('#location')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
weatherForm.addEventListener('submit',evt=> {
    evt.preventDefault();
    const locationValue = searchLocation.value;
    msg1.textContent = 'loading ....';
    msg2.textContent = '';
    fetch('/weather?address='+locationValue)
    .then(res=>  res.json())
    .then(data=> {
    if(data.error)    {
        msg1.textContent = '';
        msg2.textContent = data.error;
    } else {
        // console.log(data);
        msg1.textContent = data.location;
        msg2.textContent = data.forcast
    }
    }).catch(err=> {
        console.log(err);
    })
}); // add listener ends

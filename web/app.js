(function()
{
    cities = ['London','Prague','Madrid', 'Baku'];
    form = document.getElementById('form');
    select = document.createElement('select');
    select.value="";
    body = document.getElementById('body');
    div = document.createElement('div');
    let t=1;
    cities.forEach(element => {
        option = document.createElement('option');
        option.id=t;
        option.value=element;
        option.innerHTML = element;
        select.append(option);
        t++;
    });
    form.append(select);
}());

async function solve(city)
{
    data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=038589bb540e88531f8c6589c88c9e38`);
    res = await data.json();
    jsondata = Number(res.main.temp) - 273.15; 
    jsondata = jsondata.toFixed(2);
    div.innerHTML = `<br><li style="list-style:none;">Temperature in ${city} is ${jsondata}</li>`;
    body.append(div);
}

(function()
{
    btn = document.createElement('button');
    btn.id="button1";
    btn.innerHTML = 'Submit';
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        solve(select.value);
    });
    body.append(btn);
}());
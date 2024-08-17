let form = document.forms.calculator;
// money_before.innerHTML = form.money.value;

function deposite() {
    console.log(123);
    let result = Math.round(form.money.value * (1 + form.interest.value / 100) ** (form.months.value / 12));
    money_after.innerHTML = result
    money_before.innerHTML = form.money.value;
    height_after.style.height = (result - form.money.value) / (form.money.value / 100) + 100 + "px";
};
deposite()

form.money.oninput = deposite;
form.months.onchange = deposite;
form.interest.oninput = deposite;

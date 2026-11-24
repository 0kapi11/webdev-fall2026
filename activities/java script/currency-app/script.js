function generatedCurrencies() {
    const usd = Number(document.getElementById("usd").value);

    let USD = usd;
    let EUR = usd*.92;
    let GBP = usd*.77;
    let CAD = usd*1.44;
    let CHF = usd*.84;
    let JPY = usd*158.94;
    document.getElementById("USD").textContent=USD;
    document.getElementById("EUR").textContent=EUR;
    document.getElementById("GBP").textContent=GBP;
    document.getElementById("CAD").textContent=CAD;
    document.getElementById("CHF").textContent=CHF;
    document.getElementById("JPY").textContent=JPY;
}
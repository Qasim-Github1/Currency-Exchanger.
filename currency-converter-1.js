let countrySelection = document.querySelectorAll(".select"); 
 let exchangeButton = document.querySelector(".calculate-button");
//let exchangeButton = document.getElementsByClassName('calculate-button');
let amountValue = document.querySelector(".amount")
const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
  // const URL = ${BASE_URL}/${fromCurr.value.toLowerCase()}.json;
  const fromCurr = document.querySelector("#from")
  const toCurr = document.querySelector("#to")
  let result = document.querySelector(".result")


    for (country of countrySelection)

        {
            for (code in countryList)
            {

            const option = document.createElement("option")
            option.innerText = code;
            option.value = code;
            if (country.name === "from" && code == "USD")
            {
                option.selected = "selected"
            }
            else if (country.name === "to" && code == "PKR")
                {
                    option.selected = "selected"
                }
            country.append(option)
        }
        country.addEventListener("change",(e)=>{
                updateFlag(e.target);
        })

        }
    const updateFlag = (element) => {
             let country = element.value;
            // console.log(element);
            // console.log(country);
             let flag = countryList[country]
            // console.log(flag);
             let newImgSource = `https://flagsapi.com/${flag}/flat/64.png`
            // console.log(newImgSource);
     
         let img = element.parentElement.querySelector("img");
         img.src = newImgSource;
         //console.log(img);
             
    }
    exchangeButton.addEventListener("click", async (e)=>{
        e.preventDefault();
        //console.log("clicked");
        //console.log(amountValue.value);
        //console.log(fromCurr.value , toCurr.value);
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        console.log(response);
        let data = await response.json();
        let rate = data[toCurr.value.toLowerCase()];
        let finalValue = amountValue.value * rate ;
        console.log(finalValue);
        result.innerText = finalValue;
    })
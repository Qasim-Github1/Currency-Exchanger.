let countrySelection = document.querySelectorAll(".select"); 
 let exchangeButton = document.querySelector(".calculate-button");
let amountValue = document.querySelector(".amount")
console.log(amountValue.value);


  const fromCurr = document.querySelector("#from")
  const toCurr = document.querySelector("#to")
 let resultPara = document.querySelector(".resultP")


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
      
             let flag = countryList[country]
    
             let newImgSource = `https://flagsapi.com/${flag}/flat/64.png`
        
     
         let img = element.parentElement.querySelector("img");
         img.src = newImgSource;
 
    }

    
    exchangeButton.addEventListener("click", async (e)=>{
        e.preventDefault();
        console.log(fromCurr.value, toCurr.value);

        var myHeaders = new Headers();
        myHeaders.append("apikey", "fSF4fkrt3CfirpuwZcxW0F2GS1eWDJTq");
    
        var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
        };
    
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurr.value}&from=${fromCurr.value}&amount=${amountValue.value}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            let finalResult = result.result;
            resultPara.innerText =  `${finalResult.toFixed(2)} ${toCurr.value}` ;
        })
        .catch(error => console.log('error', error));
    
    })
        


    
  


    
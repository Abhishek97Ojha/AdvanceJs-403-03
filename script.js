var bill = document.getElementById("bill");
        var select = document.getElementById("select");
        var people = document.getElementById("people");
        var result = document.getElementById("tip");
        function calculate() {
            if (bill.value == "") {
                result.innerHTML = "Please enter total bill.";
            }
            else {
                if (select.value == "") {
                    result.innerHTML = "Please choose service."
                }
                else {
                    if (people.value == "") {
                        result.innerHTML = "Please enter number of people."
                    }
                    else {
                        if (bill.value != "" && select.value != "" && people.value != "") {
                            let tip = (bill.value * select.value) / people.value;
                            result.innerHTML = `<p><strong>Tip Amount</strong></p>
                                 <h1>₹${tip}</h1>
                                 <p><strong>each</p></strong>`;
                            bill.value = "";
                            select.value = "";
                            people.value = "";
                        }
                    }
                }
            }
            result.style.display = "flex";
            result.style.flexDirection = "column";
            result.style.justifyContent = "center";
            result.style.alignItems = "center";
            
        }



function calculate() {
    // Get the latest values when the button is clicked
    let age = document.getElementById("age").value;
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // Check if any required fields are empty or gender is not selected
    if (age === '' || height === '' || weight === '' || (!female.checked && !male.checked)) {
        let mymodal = document.getElementById("mymodal");
        mymodal.style.display = "block";
    } else {
        bmi(height, weight);
    }
}

function bmi(height, weight) {
    let w = Number(weight);
    let h = Number(height);

    // BMI calculation
    let bmiValue = (w / ((h / 100) ** 2));
    console.log(bmiValue);

    // display result
    let result= document.getElementById("bmiValue")

    result.innerHTML = `${bmiValue.toFixed(2)}`

    let result2='';
    if (bmiValue<18.5){
        result2= 'Underweight'
        gsap.to(".blue", { width: "1000%", duration: 2, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"skyblue",delay: 0, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=18.5 && bmiValue<=24.9 ){
        result2='Normal'
        gsap.to(".green", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"lightgreen",delay: 0, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=25 && bmiValue<=29.9 ){
        result2='Overweight'
        gsap.to(".yellow", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"yellow",delay: 0, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=30 && bmiValue<34.9 ){
        result2='Obese'
        gsap.to(".orange", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"orange",delay: 0, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=35 ){
        result2='Extremely Obese'
        gsap.to(".red", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"red",delay: 0, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }

    let comment= document.getElementById("comment")
    comment.innerHTML=(`${result2}`)

    

}


// for close button
function modalclose() {
    console.log("Modal close button clicked");
    let mymodal = document.getElementById("mymodal");
    mymodal.style.display = "none"; // Close the modal
}
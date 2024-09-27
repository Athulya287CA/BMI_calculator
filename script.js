

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

// restart button
let restart = document.getElementById("restart");

restart.addEventListener("click", () => {
    // Clear all input fields
    document.getElementById("age").value = '';
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';

    // Hide modal
    let mymodal = document.getElementById("mymodal");
    mymodal.style.display = "none";

    // Reset animations and UI
    gsap.to(".result", { backgroundColor: "transparent", delay: 0, width: "100%", duration: 0.8, ease: "power1.inOut" });
    gsap.to(".blue", { width: "25%", duration: 0.8, ease: "power1.inOut" });
    gsap.to(".green", { width: "25%", duration: 0.8, ease: "power1.inOut" });
    gsap.to(".yellow", { width: "25%", duration: 0.8, ease: "power1.inOut" });
    gsap.to(".orange", { width: "25%", duration: 0.8, ease: "power1.inOut" });
    gsap.to(".red", { width: "25%", duration: 0.8, ease: "power1.inOut" });

    // Clear result display
    document.getElementById("bmiValue").innerHTML = "";
    document.getElementById("comment").innerHTML = "";
});


//bmi calculation.......................................................................................................................
function bmi(height, weight) {
    let w = Number(weight);
    let h = Number(height);

    // BMI calculation
    let bmiValue = (w / ((h / 100) ** 2));
    console.log(bmiValue);

    // display result.................................................................................................................
    let result= document.getElementById("bmiValue")

    
      result.innerHTML = `${bmiValue.toFixed(2)}`
   

    let result2='';
    if (bmiValue<18.5){
        result2= 'Underweight'
        gsap.to(".blue", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"skyblue",delay: 1, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=18.5 && bmiValue<=24.9 ){
        result2='Normal'
        gsap.to(".green", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"lightgreen",delay: 1, width: "100%", duration: 1.5, ease: "power1.inOut", });

    }
    else if(bmiValue>=25 && bmiValue<=29.9 ){
        result2='Overweight'
        gsap.to(".yellow", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"yellow",delay: 1, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=30 && bmiValue<34.9 ){
        result2='Obese'
        gsap.to(".orange", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"orange",delay: 1, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }
    else if(bmiValue>=35 ){
        result2='Extremely Obese'
        gsap.to(".red", { width: "1000%", duration: 1, ease: "power1.inOut" });
        gsap.to(".result", { backgroundColor:"red",delay: 1, width: "100%", duration: 1.5, ease: "power1.inOut" });

    }

    setTimeout(() => {
        comment.innerHTML = `${result2}`;
    }, 500); // 2000 milliseconds = 2 seconds

    

}


// for close button
function modalclose() {
    console.log("Modal close button clicked");
    let mymodal = document.getElementById("mymodal");
    mymodal.style.display = "none"; // Close the modal
}




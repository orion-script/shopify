document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const sectionDropdown = document.querySelector(".section-dropDown");

  dropdownToggle.addEventListener("click", function () {
    sectionDropdown.classList.toggle("show-dropdown");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get checkboxes
  const step1Radio = document.getElementById("step1");
  const step2Radio = document.getElementById("step2");
  const step3Radio = document.getElementById("step3");
  const step4Radio = document.getElementById("step4");
  const step5Radio = document.getElementById("step5");

  const nottContainer = document.querySelector(".nott-container");
  const dcDropdownToggle = document.querySelector(".cont");

  const nottDropdown = document.querySelector(".nott-dropdown");
  const dcDropdown = document.querySelector(".dc-dropdown");

  nottContainer.addEventListener("click", function () {
    nottDropdown.classList.toggle("show-dropdown");
  });

  dcDropdownToggle.addEventListener("click", function () {
    dcDropdown.classList.toggle("show-dropdown");
  });

  // Get progress bar and completion text
  const progressBar = document.querySelector(".progress-bar");
  const completionText = document.querySelector(".level-container p");

  // Get dropdowns
  const firstStepDropdown = document.querySelector(".first--step--dropdown");
  const secondStepDropdown = document.querySelector(".second-step-dropdown");
  const thirdStepDropdown = document.querySelector(".third-step-dropdown");
  const fourthStepDropdown = document.querySelector(".fourth-step-dropdown");
  const fifthStepDropdown = document.querySelector(".fifth-step-dropdown");

  // Function to enable a dropdown and disable others
  function enableDropdown(dropdown, completionPercentage, stepNumber) {
    firstStepDropdown.style.display = "none";
    secondStepDropdown.style.display = "none";
    thirdStepDropdown.style.display = "none";
    fourthStepDropdown.style.display = "none";
    fifthStepDropdown.style.display = "none";

    dropdown.style.display = "flex";

    // Update the progress bar width
    progressBar.style.width = completionPercentage + "%";

    // Update the completion text
    completionText.textContent = `${stepNumber} / 5 completed`;

    // Add border-radius to the right side of the progress bar at the last step
    if (stepNumber === 5) {
      progressBar.style.borderTopRightRadius = "20px";
      progressBar.style.borderBottomRightRadius = "20px";
    } else {
      progressBar.style.borderTopRightRadius = "0";
      progressBar.style.borderBottomRightRadius = "0";
    }
  }

  step1Radio.addEventListener("click", function () {
    const currentSrc = step1Radio.src;
    if (currentSrc.endsWith("checked.svg")) {
      step1Radio.src = "/assets/Component 14.svg";
      enableDropdown(firstStepDropdown, 0, 0);
      console.log("Unchecked");
    } else {
      step1Radio.src = "/assets/Component 14.svg";
      step1Radio.classList.add("rotate");
      setTimeout(function () {
        step1Radio.src = "/assets/spin.svg";
      }, 250);
      setTimeout(function () {
        step1Radio.classList.remove("rotate");
        step1Radio.src = "/assets/checked.svg";
        enableDropdown(secondStepDropdown, 20, 1);
        console.log("Checked");
      }, 500);
    }
  });

  // click event listener for the second checkbox
  step2Radio.addEventListener("click", function () {
    const currentSrc = step2Radio.src;
    if (currentSrc.endsWith("checked.svg")) {
      step2Radio.src = "/assets/Component 14.svg";
      enableDropdown(secondStepDropdown, 0, 0);
      console.log("Unchecked");
    } else {
      step2Radio.src = "/assets/Component 14.svg";
      step2Radio.classList.add("rotate");
      setTimeout(function () {
        step2Radio.src = "/assets/spin.svg";
      }, 250);
      setTimeout(function () {
        step2Radio.classList.remove("rotate");
        step2Radio.src = "/assets/checked.svg";
        enableDropdown(thirdStepDropdown, 40, 2);
        console.log("Checked");
      }, 500);
    }
  });

  // Add click event listener to the third checkbox
  step3Radio.addEventListener("click", function () {
    const currentSrc = step3Radio.src;
    if (currentSrc.endsWith("checked.svg")) {
      step3Radio.src = "/assets/Component 14.svg";
      enableDropdown(thirdStepDropdown, 40, 2);
      console.log("Unchecked");
    } else {
      step3Radio.src = "/assets/Component 14.svg";
      step3Radio.classList.add("rotate");
      setTimeout(function () {
        step3Radio.src = "/assets/spin.svg";
      }, 250);
      setTimeout(function () {
        step3Radio.classList.remove("rotate");
        step3Radio.src = "/assets/checked.svg";
        enableDropdown(fourthStepDropdown, 60, 3);
        console.log("Checked");
      }, 500);
    }
  });

  // Add click event listener to the fourth checkbox
  step4Radio.addEventListener("click", function () {
    const currentSrc = step4Radio.src;
    if (currentSrc.endsWith("checked.svg")) {
      step4Radio.src = "/assets/Component 14.svg";
      enableDropdown(fourthStepDropdown, 60, 3);
      console.log("Unchecked");
    } else {
      step4Radio.src = "/assets/Component 14.svg";
      step4Radio.classList.add("rotate");
      setTimeout(function () {
        step4Radio.src = "/assets/spin.svg";
      }, 250);
      setTimeout(function () {
        step4Radio.classList.remove("rotate");
        step4Radio.src = "/assets/checked.svg";
        enableDropdown(fifthStepDropdown, 80, 4);
        console.log("Checked");
      }, 500);
    }
  });

  // Add click event listener to the fifth checkbox
  step5Radio.addEventListener("click", function () {
    const currentSrc = step5Radio.src;
    if (currentSrc.endsWith("checked.svg")) {
      step5Radio.src = "/assets/Component 14.svg";
      enableDropdown(fifthStepDropdown, 80, 4);
      console.log("Unchecked");
    } else {
      step5Radio.src = "/assets/Component 14.svg";
      step5Radio.classList.add("rotate");
      setTimeout(function () {
        step5Radio.src = "/assets/spin.svg";
      }, 250);
      setTimeout(function () {
        step5Radio.classList.remove("rotate");
        step5Radio.src = "/assets/checked.svg";
        enableDropdown(fifthStepDropdown, 100, 5);
        console.log("Checked");
      }, 500);
    }
  });
});

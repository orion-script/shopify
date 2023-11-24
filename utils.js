document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownToggle");
  const sectionDropdown = document.querySelector(".section-dropDown");

  dropdownToggle.addEventListener("click", function () {
    // Toggle the visibility of the dropdown
    sectionDropdown.classList.toggle("show-dropdown");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get radio buttons
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
    // Toggle the visibility of the nott-dropdown
    nottDropdown.classList.toggle("show-dropdown");
  });

  dcDropdownToggle.addEventListener("click", function () {
    // Toggle the visibility of the dc-dropdown
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

    dropdown.style.display = "flex"; // You can change this to "block" if needed

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

  // Add click event listener to the first radio button
  step1Radio.addEventListener("click", function () {
    enableDropdown(secondStepDropdown, 20, 1);
    console.log("1");
  });

  // Add click event listener to the second radio button
  step2Radio.addEventListener("click", function () {
    enableDropdown(thirdStepDropdown, 40, 2);
    console.log("2");
  });

  // Add click event listener to the third radio button
  step3Radio.addEventListener("click", function () {
    enableDropdown(fourthStepDropdown, 60, 3);
    console.log("3");
  });

  // Add click event listener to the fourth radio button
  step4Radio.addEventListener("click", function () {
    enableDropdown(fifthStepDropdown, 80, 4);
    console.log("4");
  });

  // Add click event listener to the fifth radio button
  step5Radio.addEventListener("click", function () {
    enableDropdown(fifthStepDropdown, 100, 5);
    console.log("5");
    //   updateProgressBar(100); // Update the progress bar separately
  });
});

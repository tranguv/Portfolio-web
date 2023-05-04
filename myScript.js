//function to perfom scrolling of the left arrow
function leftScroll() {
    const left = document.querySelector(".scrollingPJ");
    left.scrollBy(-500, 0);
}

function rightScroll() {
    const right = document.querySelector(".scrollingPJ");
    right.scrollBy(500, 0);
}

function onClick() {
  const button1 = document.getElementById("computing");
  const button2 = document.getElementById("it");
  const button3 = document.getElementById("club");
  const textContainer = document.getElementById("text-container");

  button1.addEventListener("click", function() {
    textContainer.innerHTML ="<ul><li>► Proficient in providing exceptional technical support on-site, phone, live chat, and email channels.</li><li>► Experienced in troubleshooting various technical issues including network connections, setting up new user accounts and adept at providing prompt and efficient resolution to user issues.</li><li>► Skilled in recording, tracking, and escalating incidents via ticketing systems for efficient resolution.</li><li>► Strong ability to work effectively in a team and independently.</li><li>► Maintains up-to-date knowledge on the latest technologies and advancements in the industry.</li></ul>"; 
    textContainer.style.display = "block";
  });

  button2.addEventListener("click", function() {
    textContainer.textContent = "This is the text for Button 2";
    textContainer.style.display = "block";
  });

  button3.addEventListener("click", function() {
    textContainer.textContent = "This is the text for Button 3";
    textContainer.style.display = "block";
  });
}

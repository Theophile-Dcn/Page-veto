console.log("hellow world");

document.getElementById("scrollBtn").addEventListener("click", function() {
    console.log("hello world");
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  });
document.write("<center><h1>Assessment: Coin Object</h1></center>");

let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property
          to be either 0 or 1: use "this.state" to access
           the "state" property on this object.*/
    // let random = Math.floor(Math.random() * 1 + 1);
    let random = Math.random();
    console.log(random);

    if (random < 0.5) {
      return (this.state = 0);
    } else if (random > 0.5) {
      return (this.state = 1);
    } else {
      return console.log("Something went wrong!");
    }
  },

  toString: function () {
    let paragraph = document.createElement("p");
    /* 2. Return the string "Heads" or "Tails", 
    depending on whether "this.state" is 0 or 1. */
    if (this.state === 0) {
      paragraph.innerHTML = "Heads";
      document.body.append(paragraph);
      // document.write("Heads");
      console.log(paragraph);
    } else if (this.state === 1) {
      paragraph.innerHTML = "Tails";
      document.body.append(paragraph);
      console.log(paragraph);
    } else {
      console.log("toString Function didn't worked as expected!");
    }
  },

  toHTML: function () {
    let image = document.createElement("img");
    /* 3. Set the properties of this image element to show
       either face-up or face-down, depending on whether 
       this.state is 0 or 1.*/
    if (this.state === 0) {
      image.src = "./images/heads1.jpg";
      image.style.height = "150px";
      image.style.width = "150px";
      document.body.append(image);
    } else if (this.state === 1) {
      image.src = "./images/tail.jpg";
      image.style.height = "150px";
      image.style.width = "150px";
      document.body.append(image);
    } else {
      console.log("Image Didn't worked!");
    }
    return image;
  },
};

let btnFlip = document.createElement("button");
btnFlip.innerHTML = "Display Flips";
document.body.append(btnFlip);

let btnImg = document.createElement("button");
btnImg.innerHTML = "Display Images";
btnImg.onmouseover = "cursor";
document.body.append(btnImg);

btnFlip.addEventListener("click", function display20Flips() {
  /* Write a function called display20Flips,
     that uses a loop to flip the coin 20 times.
     Each time the coin flips,
     display the result of each flip as a string on the page,
     (make use of your toString() method) */

  for (let i = 1; i <= 20; i++) {
    let numDiv = document.createElement("div");
    numDiv.append(i);
    document.body.append(numDiv);
    coin.toString();
    coin.toHTML();
  }
});

btnImg.addEventListener("click", function display20Images() {
  /* Write a function called display20Images(), 
     again using a loop to flip the coin 20 times,
     but this time instead of displaying the result as a string,
     display the result of each flip as an 
     HTML IMG element on the page (make use of your toHTML() method). */

  for (let i = 1; i <= 20; i++) {
    let numDiv = document.createElement("div");
    numDiv.append(i);
    document.body.append(numDiv);
    coin.toHTML();
  }
});

coin.flip();
coin.toString();
coin.toHTML();
display20Flips();
display20Images();

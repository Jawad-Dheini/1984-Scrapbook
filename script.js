let pages = [
  `<div id="page-1">
<img src="assets/page1.jpeg" width="450" height="450" />
</div>`,
  `<div id="page-2">
<div id="inner-div-2">
  <p id="down-w-bb">
    Down with Big Brother Down with Big Brother Down with Big Brother
    Down with Big Brother
  </p>
</div>
</div>`,
  `<div id="page-3">
  <div id="inner-div-3">
    <img id="london-1984" src="assets/London, 1984.jpeg" />
    <p id="london-text">London, 1984</p>
  </div>
</div>`,
  `<div id="page-4">
<div id="page-4-top">
  <p>Why is she there... WHY??</p>
</div>
<div id="inner-div-4">
  <img id="julia" src="assets/julia.jpeg" />
</div>
<div id="page-4-bottom">
  <p>She must be a SPY!!</p>
</div>
</div>`,
  `<div id="page-5">
<div id="inner-div-5">
  <img id="flag" src="assets/flag.jpeg" />
</div>
</div>`,
  `<div id="page-6">
<div id="inner-div-6">
  <img id="torture-room" src="assets/torture-room.jpeg" />
  <p id="betrayal-text">"Betrayal is when we stop loving each other"</p>
</div>
</div>`,
  `<div id="page-7">
<div id="inner-div-7-img">
  <img id="torture-room" src="assets/Room 101.jpeg" />
</div>
<div id="inner-div-7-txt">
  <p>
    The room of your worst fears, room 101... <br />
    I still have a faint memory of this place..."
  </p>
</div>
</div>`,
  `<div id="page-8">
<img src="assets/2+2=5.jpeg" />
</div>`,
  `<div id="page-9">
<img src="assets/calendar.jpeg" />
</div>`,
  `<div id="page-10"></div>`,
];

const nextBtn = document.getElementById("next-btn");
let i = 0;
nextBtn.onclick = () => {
  if (i < 10) {
    document.getElementById("outer-div").innerHTML = pages[i];
    i++;
  }
};

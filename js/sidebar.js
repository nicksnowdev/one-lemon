// found on stack exchange
// this magic block of code uses a comprehensive list (regex) of possible values to be returned by navigator.userAgent that indicate a mobile user.
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

// check for mobile user and adjust css variables accordingly
let mobile = false;
if (mobileCheck()) {
  mobile = true;
  document.documentElement.style.setProperty('--descriptionWidth', '100%');
  // mobile project pages need a lot of optimization
}

// called whenever the window is resized
function windowResized() {
  // keep description width to min size
  if(!mobile) {
    let descriptionMinWidth = getComputedStyle(document.documentElement).getPropertyValue("--descriptionMinWidth");
    if(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--descriptionWidthPercent"), 10) * .01 * window.innerWidth < parseInt(descriptionMinWidth, 10)) {
      document.documentElement.style.setProperty('--descriptionWidth', descriptionMinWidth);
    }
    else {
      document.documentElement.style.setProperty('--descriptionWidth', document.documentElement.style.getPropertyValue('--descriptionWidthPercent'));
    }
  }
}

// create description sidebar once the page has loaded (trouble finding body otherwise)
window.addEventListener("load", async function () {
  // create main div
  const sidebarDiv = document.createElement("div");
  sidebarDiv.id = "sidebar";
  document.body.appendChild(sidebarDiv);

  // create title text
  const descriptionTitleH3 = document.createElement("h3");
  descriptionTitleH3.id = "descriptionTitle";
  descriptionTitleH3.innerText = document.title;
  sidebarDiv.appendChild(descriptionTitleH3);

  // create description text
  const descriptionTextP = document.createElement("p");
  descriptionTextP.id = "descriptionText";
  let descriptionData = await fetch("description.txt")
  let descriptionDataText = await descriptionData.text();
  descriptionTextP.innerText = descriptionDataText; // put contents of txt file here
  sidebarDiv.appendChild(descriptionTextP);

  // create close button
  const sidebarCloseA = document.createElement("a");
  sidebarCloseA.id = "sidebarClose";
  sidebarCloseA.innerText = "[x]";
  sidebarCloseA.onclick = sidebarAnim;
  sidebarDiv.appendChild(sidebarCloseA);

  // create open button
  const sidebarOpenA = document.createElement("a");
  sidebarOpenA.id = "sidebarOpen";
  sidebarOpenA.innerText = "[i]";
  sidebarOpenA.onclick = sidebarAnim;
  document.body.appendChild(sidebarOpenA);
})

// sidebar animation stuff
let sidebarExpanded = false;
function sidebarAnim() {
  if(!sidebarExpanded) {
    document.getElementById("sidebar").classList.remove("sidebarRetractAnim");
    void document.getElementById("sidebar").offsetWidth;
    document.getElementById("sidebar").classList.add("sidebarExpandAnim");
    document.getElementById("sidebar").style.boxShadow = "0px 0px 15px var(--col0)"; // apply shadow when open
  }
  else {
    document.getElementById("sidebar").classList.remove("sidebarExpandAnim");
    void document.getElementById("sidebar").offsetWidth;
    document.getElementById("sidebar").classList.add("sidebarRetractAnim");
    document.getElementById("sidebar").style.boxShadow = "0px 0px 0px var(--col0)"; // hide shadow when closed
  }
  sidebarExpanded = !sidebarExpanded;
}
/// <reference path="C:/Users/nicsn/projects/resources/p5_definitions/global.d.ts" />

/************** NON-P5 STUFF **************/

// little thing to fix canvas container size on mobile
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

let aboutExpanded = false;
function aboutMeAnim() {
  if(!aboutExpanded) {
    document.getElementById("aboutMe").classList.remove("aboutMeRetractAnim");
    void document.getElementById("aboutMe").offsetWidth;
    document.getElementById("aboutMe").classList.add("aboutMeExpandAnim");
  }
  else {
    document.getElementById("aboutMe").classList.remove("aboutMeExpandAnim");
    void document.getElementById("aboutMe").offsetWidth;
    document.getElementById("aboutMe").classList.add("aboutMeRetractAnim");
  }
  aboutExpanded = !aboutExpanded;
}
// this is called if the canvas is clicked on
function aboutMeClose() {
  if(aboutExpanded) {
    document.getElementById("aboutMe").classList.remove("aboutMeExpandAnim");
    void document.getElementById("aboutMe").offsetWidth;
    document.getElementById("aboutMe").classList.add("aboutMeRetractAnim");
  }
  aboutExpanded = false;
}

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
  document.documentElement.style.setProperty('--aboutMeWidth', '100%');
  document.documentElement.style.setProperty('--aboutMeFontSize', '24pt');
  document.documentElement.style.setProperty('--aboutMePicSize', '60%');
}

/************ END NON-P5 STUFF ************/




// import colors from css
let col0 = getComputedStyle(document.documentElement).getPropertyValue("--col0");
let col1 = getComputedStyle(document.documentElement).getPropertyValue("--col1");
let col2 = getComputedStyle(document.documentElement).getPropertyValue("--col2");
let col3 = getComputedStyle(document.documentElement).getPropertyValue("--col3");
let col4 = getComputedStyle(document.documentElement).getPropertyValue("--col4");
let col5 = getComputedStyle(document.documentElement).getPropertyValue("--col5");

let col0Arr;
let col1Arr;
let col2Arr;
let col3Arr;
let col4Arr;
let col5Arr;

let bioMinWidth = getComputedStyle(document.documentElement).getPropertyValue("--aboutMeMinWidth");

// canvas and sundry variables
let containerSize;
let canvas;
let extraWidth = 18; // ensures the canvas goes all the way to the edge
let extraHeight = -10; // add extra margin

// camera object
const cam = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  smoothing: 10, // has its own smoothing variable
  angle: 10
}
// these are used to draw things relative to the center of the canvas
let centerX = 0;
let centerY = 0;
let xa = 0; // x *adjusted
let ya = 0; // y *adjusted

// interface constants
const ND = 100; // node dispersion
const NS = 50; // node size
const WM = 2; // wobble magnitude
const BW = 14; // branch weight
const LW = 7; // leaf weight
const FFS = 17; // folder font size
const FONTNAME = "Vanilla Extract";
const GD = 37; // grid dispersion
const GW = 2; // grid weight
// these get changed with scale
let nodeDispersion = ND;
let nodeSize = NS;
let gridDispersion = GD;
let gridDispersion10 = gridDispersion * 10;
let gridWeight = GW;
let wobbleXRate = 2;
let wobbleYRate = 1.5;
let wobbleMag = WM;
let branchWeight = BW;
let leafWeight = LW;
let scale = 1; // scale changes when you change the canvas size. keeps everything looking the same accross devices.
let smoothing = 5; // smoothing for node motion
let mediumSmoothing = 3; // smoothing for project focus expansions
let fastSmoothing = 2; // smoothing for node mouse-over expansions

let projectInFocus = 0; // this variable holds the currently open project and draws it on top of everything.
let projectLink; // this holds an <a> element that is created dynamically for projects in focus

// json object and container for preloaded thumbnails
let jsonObj;
const thumbnails = {};
let masker;
// used for the one-lemon thumbnail
let feedbackMasker;
let dim; // set in windowResized(), holds shortest canvas dimension
let oneLemonVisible = false;

// dot matrix for canvas background
let bgImg;

// used to keep track of mouse input
let mClick = false;

// these are used to let the "mouse" exist where you just tapped on mobile for no more than tapWindow frames.
let tapTimer = 0;
let tapWindow = 5; // by the way, this is set to 20 when a project starts focusing, and back to 5 when it closes.

// keep a history of the last clicked-on nodes so the camera can focus on the right place
const history = [];









// get input and prevent wacky inputs >:(
function touchEnded() {
    mClick = true;
    tapTimer = 0; // reset tapTimer
    // if mouse is on the canvas (without this, clicking the about me link doesn't close bio)
    if(mouseX > 0 && mouseX < canvas.width && mouseY > 0 && mouseY < canvas.height) {
      if(mobile && aboutExpanded) { // prevent clicking "through" bio onto interface on mobile
        mClick = false;
      }
    }
}
// mitigate redundant inputs if the mouse is on the canvas, unless a project is in focus (links don't open otherwise)
// also lets them through if the bio is showing for the same reason
function touchStarted() {
  if(aboutExpanded || projectInFocus != 0 || mouseY < 0 || mouseY > canvas.height || mouseX < 0 || mouseX > canvas.width) {
    return true;
  }
  else {
    return false;
  }
}
function mouseClicked() {
  if(projectInFocus != 0 || mouseY < 0 || mouseY > canvas.height || mouseX < 0 || mouseX > canvas.width) {
    return true;
  }
  else {
    return false;
  }
}

// called whenever the window is resized
function windowResized() {
  // i take no credit for these 2 lines, but they are needed for making the canvas the right size on mobile.
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  containerSize = select("#canvasContainer").size();
  resizeCanvas(containerSize.width + extraWidth, containerSize.height + extraHeight);
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  // scale interface
  scale = min(canvas.width, canvas.height) / 686;
  scaleInterface();

  // keep bio width to min size
  if(!mobile) {
    if(parseInt(getComputedStyle(document.documentElement).getPropertyValue("--aboutMeWidthPercent"), 10) * .01 * canvas.width < parseInt(bioMinWidth, 10)) {
      document.documentElement.style.setProperty('--aboutMeWidth', bioMinWidth);
    }
    else {
      document.documentElement.style.setProperty('--aboutMeWidth', document.documentElement.style.getPropertyValue('--aboutMeWidthPercent'));
    }
  }

  dim = min(width, height);
  feedbackMasker.remove();
  feedbackMasker = createGraphics(min(width, height), min(width, height));
  feedbackMasker.clear();
  feedbackMasker.noStroke();
  feedbackMasker.fill(0, 0, 0, 127);
  feedbackMasker.circle(dim / 2, dim / 2, dim);
  feedbackMasker.fill(0, 0, 0, 255);
  feedbackMasker.circle(dim / 2, dim / 2, dim * .99);
}

// keep things looking consistent accross different screen sizes
function scaleInterface() {
  nodeDispersion = ND * scale;
  nodeSize = NS * scale;
  wobbleMag = WM * scale;
  branchWeight = BW * scale;
  leafWeight = LW * scale;
  folderFontSize = FFS * scale;
  gridDispersion = GD * scale;
  gridDispersion10 = gridDispersion * 10;
  gridWeight = GW * scale;
}

// this function kind of got away from me, but it works well enough for this specific use
// it just draws the drop shadows on the top and bottom of the canvas
function gradient(x, y, w, h, c1, c2, dir) {
  push();
  noFill();
  for (let i = 0; i <= h; i++) {
    let inter = map(y + i, y, y + h, 0, 1);
    let c = lerpColor(c1, c2, 1 - pow(inter, 5));
    stroke(c);
    line(x, y + i * dir, x + w, y + i * dir);
  }
  pop();
}

// i just realized i could use Math.sign() but i already did this, so...
function sign(num) {
  if(num) return num / abs(num);
  return 1; // zero is considered positive
}

// take css color strings and make them into arrays of rgba
function cssColorParse(inString) {
  let colArr = [];
  let inStringParsing = inString.slice(inString.indexOf("(") + 1);
  let parse = parseInt(inStringParsing, 10);
  colArr.push(parse);
  inStringParsing = inStringParsing.slice(inStringParsing.indexOf(",") + 1);
  parse = parseInt(inStringParsing, 10);
  colArr.push(parse);
  inStringParsing = inStringParsing.slice(inStringParsing.indexOf(",") + 1);
  parse = parseInt(inStringParsing, 10);
  colArr.push(parse);
  return colArr;
}







// recursively iterates through all subfolders to add keys/values and load images
// gets run once in setup()
function prepJsonObj(folder, imagesObj) {
  // add variables to the folder nodes
  folder["x"] = 0;
  folder["y"] = 0;
  folder["targetX"] = 0;
  folder["targetY"] = 0;
  folder["size"] = nodeSize;
  folder["targetSize"] = nodeSize;
  folder["open"] = false;
  folder["selected"] = false;
  folder["clicked"] = false;
  folder["closing"] = false;
  folder["retracting"] = false;
  folder["labelA"] = 0;
  folder["targetLabelA"] = 255;
  folder["angle"] = 0;
  folder["clocks"] = {
    wobbleX: random(0, 360),
    wobbleY: random(0, 360),
  };
  folder["wobRateMod"] = random(.75, 1.33);
  // do the same for project nodes
  for(var i = 0; i < folder.projects.length; i++) {
    folder.projects[i]["x"] = 0;
    folder.projects[i]["y"] = 0;
    folder.projects[i]["size"] = nodeSize;
    folder.projects[i]["targetSize"] = nodeSize;
    folder.projects[i]["targetX"] = 0;
    folder.projects[i]["targetY"] = 0;
    folder.projects[i]["retracting"] = false;
    folder.projects[i]["focusing"] = false;
    folder.projects[i]["mouseIn"] = false;
    folder.projects[i]["angle"] = 0;
    folder.projects[i]["clocks"] = {
      wobbleX: random(0, 360),
      wobbleY: random(0, 360)
    };
    folder.projects[i]["wobRateMod"] = random(.75, 1.33);
    // add images in the form of "project_path": "projects/project_path/thumbnail.jpg"
    // supply callback function to mask images
    imagesObj[folder.projects[i].path] = loadImage("projects/" + folder.projects[i].path + "/thumbnail.jpg", function maskThumbs(img) {
      // apply a circular mask to the thumbnail images (images must be 500x500)
      masker.clear();
      masker.noStroke();
      masker.fill(0, 0, 0, 127);
      masker.circle(250, 250, 500);
      masker.fill(0, 0, 0, 255);
      masker.circle(250, 250, 495);
      img.mask(masker);
    });
  }
  // recursively run through subfolders
  for(var i = 0; i < folder.subfolders.length; i++) {
    prepJsonObj(folder.subfolders[i], imagesObj);
  }
}

// this is called once from a closing folder
// it tells all of its children to zoom into their parents
function retractChildren(folder) {
  if(folder.open) {
    // remove these folders from the history, as they will soon be closed. (also would be disastrous for the camera)
    let index = history.indexOf(folder);
    if(index != -1) {
      history.splice(index, 1);
    }
    for(let i = 0; i < folder.subfolders.length; i++) {
      // retract subfolders. note that the first folder this function is called on is not retracted.
      folder.subfolders[i].retracting = true;
      folder.subfolders[i].targetLabelA = 0;
      retractChildren(folder.subfolders[i]);
    }
    for(let i = 0; i < folder.projects.length; i++) {
      // retract projects
      folder.projects[i].retracting = true;
    }
  }
}

// fully close and reset folder and project variables
function closeChildren(folder) {
  folder.retracting = false;
  folder.closing = false;
  folder.targetLabelA = 255;
  if(folder.open) {
    folder.open = false;
    for(let i = 0; i < folder.subfolders.length; i++) {
      closeChildren(folder.subfolders[i]);
    }
    for(let i = 0; i < folder.projects.length; i++) {
      folder.projects[i].retracting = false;
    }
  }
}





// every open folder runs this to process its projects
function processProjects(folder, numItems, numProjects) {
  for(var i = 0; i < numProjects; i++) {
    let project = folder.projects[i];
    project.angle = 180 / numItems * i - 90 / numItems * (numItems - 1) + folder.angle;

    // if moused over
    if( dist(mouseX, mouseY, project.x + xa, project.y + ya) < project.size * .5 &&
        !project.retracting &&
        abs(project.targetX - project.x) + abs(project.targetY - project.y) < 10 * scale && // prevent instant expansion
        projectInFocus == 0) { // prevent bubble effect when a project is focused
      project.targetSize = nodeSize * 1.5;
      // if clicked on
      if(mClick) {
        tapWindow = 20; // set tap window for project in focus mode
        projectInFocus = JSON.parse(JSON.stringify(project)); // deep copy rather than reference
        projectInFocus.focusing = true;
        projectLink.attribute("href", "https://www.one-lemon.com/projects/" + project.path);
        // move folder to front of history
        let index = history.indexOf(folder);
        if(index != -1) {
          history.splice(index, 1);
          history.push(folder);
        }
        history.push(projectInFocus);
      }
    }
    else
    {
      project.targetSize = nodeSize;
    }

    // normal behavior
    if(!project.retracting && folder.open) { // second condition fixes desynchronization near close
      project.targetX = folder.x + cos(project.angle) * nodeDispersion;
      project.targetY = folder.y + sin(project.angle) * nodeDispersion;
      project.clocks.wobbleX += wobbleXRate * project.wobRateMod;
      project.clocks.wobbleY += wobbleYRate * project.wobRateMod;
      project.targetX += cos(project.clocks.wobbleX) * wobbleMag;
      project.targetY += sin(project.clocks.wobbleY) * wobbleMag;
    }
    else { // retracting behavior
      project.targetX = folder.x;
      project.targetY = folder.y;
      if(abs(project.targetX - project.x) + abs(project.targetY - project.y) < 5) {
        closeChildren(folder);
      }
    }
    // always-behavior
    project.x += (project.targetX - project.x) / smoothing;
    project.y += (project.targetY - project.y) / smoothing;
    project.size += (project.targetSize - project.size) / fastSmoothing;
    push();
    strokeWeight(branchWeight);
    stroke(col3);
    line(folder.x + xa, folder.y + ya, project.x + xa, project.y + ya);
    strokeWeight(leafWeight);
    fill(col5);
    circle(project.x + xa, project.y + ya, project.size);
    image(thumbnails[ project.path],
                      project.x + xa - project.size / 2 + leafWeight / 4, // offset half of half the stroke weight
                      project.y + ya - project.size / 2 + leafWeight / 4,
                      project.size - leafWeight / 2,
                      project.size - leafWeight / 2);
    pop();
    
    // draw project label
    // also only draw this if there is not a project in focus
    if(projectInFocus != 0 && projectInFocus.focusing) {}
    else {
      let labelAnchorX = 0;
      let labelAnchorY = 0;
      push();
      textStyle(LIGHTEST);
      textAlign(CENTER);
      textFont(FONTNAME, folderFontSize); // scale font size
      strokeWeight(0);
      noStroke();
      fill(col4Arr[0], col4Arr[1], col4Arr[2], !folder.retracting * (255 - folder.labelA)); // draw text with animated alpha
      // this positions the text taking into account the width of the label (width * cos(angle)^3)
      labelAnchorX = project.x + (nodeSize + (textWidth(project.title) * .45) * abs(pow(cos(project.angle), 3))) * cos(project.angle);
      labelAnchorY = project.y + textSize() * .3 + (nodeSize + (textWidth(project.title) * .45) * abs(pow(cos(project.angle), 3))) * sin(project.angle);
      text(project.title, labelAnchorX + xa, labelAnchorY + ya);
      pop();
    }
  }
}





// every visible folder runs this
function processSelf(folder, lastFolder) {
  if(folder.name == "Web Design") oneLemonVisible = true; // bad hard-coded solution to optimize the active thumbnail on one-lemon project
  if(folder != lastFolder) {
    // if moused over
    if( mouseX > folder.x + xa - nodeSize / 2 && mouseX < folder.x + xa + nodeSize / 2 &&
        mouseY > folder.y + ya - nodeSize / 2 && mouseY < folder.y + ya + nodeSize / 2 &&
        projectInFocus == 0) { // prevent bubble effect when a project is in focus
      
      folder.targetSize = nodeSize * 1.15; // mouse-over effect
      
      if(!folder.retracting && !folder.closing) { // don't process the mouse if it's retracting or closing
        // if there was a mouse click
        if(mClick) {
          // if this folder was closed:
          if(!folder.open) {
            // open the folder and add it to the history
            folder.open = true;
            history.push(folder);
            // initialize children's positions at this folder when they start to shoot out
            for(var i = 0; i < folder.subfolders.length; i++) {
              folder.subfolders[i].x = folder.x;
              folder.subfolders[i].y = folder.y;
            }
            for(var i = 0; i < folder.projects.length; i++) {
              folder.projects[i].x = folder.x;
              folder.projects[i].y = folder.y;
            }
            folder.targetLabelA = 0; // start label fading out
          }

          // if this folder was open:
          else {
            // retract children, put this folder into closing mode.
            folder.closing = true;
            retractChildren(folder);
            // delete from history
            let index = history.indexOf(folder);
            if(index != -1) {
              history.splice(index, 1);
            }
            folder.targetLabelA = 255; // start label fading in
          }
          mClick = false; // capture the input so nothing else reads it
        }
      }
    }
    else {
      folder.targetSize = nodeSize; // no mouse-over effect
    }

    // normal behavior
    if(!folder.retracting && lastFolder.open) { // second condition fixes desynchronization near close
      folder.targetX = lastFolder.x + cos(folder.angle) * nodeDispersion;
      folder.targetY = lastFolder.y + sin(folder.angle) * nodeDispersion;
      folder.clocks.wobbleX += wobbleXRate * folder.wobRateMod;
      folder.clocks.wobbleY += wobbleYRate * folder.wobRateMod;
      folder.targetX += cos(folder.clocks.wobbleX) * wobbleMag;
      folder.targetY += sin(folder.clocks.wobbleY) * wobbleMag;
    }
    // retracting behavior
    else {
      folder.targetX = lastFolder.x;
      folder.targetY = lastFolder.y;
      if(abs(folder.targetX - folder.x) + abs(folder.targetY - folder.y) < 5) {
        closeChildren(lastFolder); // close parent folder and all of its children
      }
    }
    // all the time behavior
    folder.x += (folder.targetX - folder.x) / smoothing;
    folder.y += (folder.targetY - folder.y) / smoothing;
    folder.size += (folder.targetSize - folder.size) / fastSmoothing;
    push();
    strokeWeight(branchWeight);
    stroke(col3);
    line(lastFolder.x + xa, lastFolder.y + ya, folder.x + xa, folder.y + ya);
    strokeWeight(leafWeight);
    fill(col4);
    rect(folder.x + xa - folder.size / 2, folder.y + ya - folder.size / 2, folder.size, folder.size);
    pop();

    // draw folder label (transparent if folder is open)
    // also only draw this if there is not a project in focus
    if(projectInFocus != 0 && projectInFocus.focusing) {}
    else {
      let labelAnchorX = 0;
      let labelAnchorY = 0;
      push();
      textStyle(LIGHTEST);
      textAlign(CENTER);
      textFont(FONTNAME, folderFontSize); // scale font size
      strokeWeight(0);
      noStroke();
      // fix desynchronization near close
      if(lastFolder.open) {
        folder.labelA += (folder.targetLabelA - folder.labelA) / (smoothing / 2);
      }
      fill(col4Arr[0], col4Arr[1], col4Arr[2], folder.labelA); // draw text with animated alpha
      // this positions the text taking into account the width of the label (width * cos(angle)^3)
      labelAnchorX = folder.x + (nodeSize + (textWidth(folder.name) * .45) * abs(pow(cos(folder.angle), 3))) * cos(folder.angle);
      labelAnchorY = folder.y + textSize() * .3 + (nodeSize + (textWidth(folder.name) * .45) * abs(pow(cos(folder.angle), 3))) * sin(folder.angle);
      text(folder.name, labelAnchorX + xa, labelAnchorY + ya);
      pop();
    }
  }
}








// main update loop for folders
// i've set this up to allow projects at intermediate nodes, i.e. with subfolders in the same folder.
// i'm not sure if this will ever actually need to be used, and doing it will probably cause problems
function recursiveLoop(folder, lastFolder) {

  // only process contents if folder is open
  if(folder.open) {
    let numItems = folder.subfolders.length + folder.projects.length;
    let numProjects = folder.projects.length;

    // process projects
    processProjects(folder, numItems, numProjects);

    // process subfolders
    for(var i = numProjects; i < numItems; i++) {
      if(folder != lastFolder) {
        // i don't think it be like it is, but it do.
        folder.subfolders[i - numProjects].angle = 180 / numItems * i - 90 / numItems * (numItems - 1) + folder.angle;
      }
      else { // main folder only
        folder.subfolders[i - numProjects].angle = 360 / folder.subfolders.length * i + cam.angle;
      }
      // process deeper
      recursiveLoop(folder.subfolders[i - numProjects], folder);
    }
  }

  // process self
  processSelf(folder, lastFolder);
}






// process the currently expanded project
function processProjectInFocus(project) {
  // capture mouse input before interface if a project is expanded
  if(project != 0) {
    project.size += (project.targetSize - project.size) / mediumSmoothing;
    if(project.focusing) {
      project.targetSize = nodeSize * 7; // set the size of expanded project here so that it adapts to changes in scale
      // if moused over
      if( dist(mouseX, mouseY, project.x + xa, project.y + ya) < project.size * .5 &&
          abs(project.targetX - project.x) + abs(project.targetY - project.y) < 10 * scale) { // prevent instant expansion

        project.mouseIn = true;
        // THIS NEEDS TO BE ADJUSTED IF YOU CHANGE THE SIZE OF THE HEADER
        projectLink.position(winMouseX - 51, winMouseY - 28); // position link to the mouse
        projectLink.style("font-size", "36pt");
            
        // if clicked on
        if(mClick) {
          mClick = false;
        }
      }
      else
      {
        project.mouseIn = false;
        projectLink.position(width, height); // position link off the page when not in use
        projectLink.style("font-size", "0pt");
        // if clicked outside
        if(mClick) {
          project.focusing = false;
          project.targetSize = nodeSize;
          let index = history.indexOf(project);
          if(index != -1) {
            history.splice(index, 1);
          }
          mClick = false;
          tapWindow = 5; // reset tap window to normal duration
        }
      }
    }
    else { // if not focusing, so, CLOSING
      if(project.size - project.targetSize < 10 * scale) {
        projectInFocus = 0; // pretty much just delete this object 
      }
    }
  }
}





function drawProjectInFocus(project) {
  
  // draw thumbnail
  let shadowAlpha = 90;
  let animator = 0; // used to scale various opacities with size relative to target size
  if(project.focusing) animator = project.size / project.targetSize
  else animator = 1 - project.targetSize / project.size;
  // background shadow
  push();
  fill(0, 0, 0, animator * shadowAlpha);
  noStroke();
  rect(0, 0, canvas.width, canvas.height);
  // thumbnail
  stroke(col3);
  strokeWeight(leafWeight);
  fill(col5);
  circle(project.x + xa, project.y + ya, project.size);
  image(thumbnails[ project.path],
                    project.x + xa - project.size / 2 + leafWeight / 4, // offset half of half the stroke weight
                    project.y + ya - project.size / 2 + leafWeight / 4,
                    project.size - leafWeight / 2,
                    project.size - leafWeight / 2);
  pop();

  // draw labels
  if(project.focusing) {

    // draw open text on thumbnail if moused over
    if(project.mouseIn && project.size / project.targetSize > .9999) {
      push();
      fill(255, 255, 255, 24);
      circle(project.x + xa, project.y + ya, project.size);
      fill(255, 255, 255, 200);
      stroke(0, 0, 0);
      strokeWeight(2 * scale);
      textStyle(LIGHTEST);
      textAlign(CENTER);
      textFont(FONTNAME, folderFontSize * 2); // scale font size
      text("OPEN", project.x + xa, project.y + project.size * .4 + ya);
      pop();
    }

    // draw project title on top
    let labelAnchorX = 0;
    let labelAnchorY = 0;
    let labelMargin = 30;
    push();
    textStyle(LIGHTEST);
    textAlign(CENTER);
    textFont(FONTNAME, folderFontSize * 2); // scale font size
    strokeWeight(2 * scale);
    stroke(col3);
    labelAnchorX = project.x;
    labelAnchorY = project.y - textSize() * .3 - project.size * .5 - scale * labelMargin;
    fill(col0Arr[0], col0Arr[1], col0Arr[2], animator * 255);
    rect(labelAnchorX - textWidth(project.title) * .5 - scale * 13 + xa, labelAnchorY - textSize() * 1.16 + ya, textWidth(project.title) + scale * 26, textSize() * .6 + 30 * scale, 10 * scale);
    fill(col4Arr[0], col4Arr[1], col4Arr[2], animator * 255); // draw text with animated alpha
    noStroke();
    text(project.title, labelAnchorX + xa, labelAnchorY + ya);
    pop();

    // draw description
    push();
    textStyle(LIGHTEST);
    textAlign(LEFT);
    textFont(FONTNAME, folderFontSize); // scale font size
    strokeWeight(2 * scale);
    stroke(col3);
    fill(col0Arr[0], col0Arr[1], col0Arr[2], animator * 255);
    labelAnchorX = project.x - project.size * .75;
    labelAnchorY = project.y + project.size * .5 + scale * labelMargin;
    rect(labelAnchorX + xa, labelAnchorY + ya, project.size * 1.5, textSize() * 3.25, 10 * scale);
    fill(col4Arr[0], col4Arr[1], col4Arr[2], animator * 255); // draw text with animated alpha
    noStroke();
    textWrap(WORD);
    text(project.description, labelAnchorX + scale * 10 + xa, labelAnchorY + scale * 10 + ya, project.size * 1.5 - scale * 10);
    pop();
  }
}







function preload() {
  // load json file containing all the information about how to organize the projects
  jsonObj = loadJSON("json/meta.json");
  bgImg = loadImage("images/bg.png");
}








function setup() {
  col0Arr = cssColorParse(col0);
  col1Arr = cssColorParse(col1);
  col2Arr = cssColorParse(col2);
  col3Arr = cssColorParse(col3);
  col4Arr = cssColorParse(col4);
  col5Arr = cssColorParse(col5);

  angleMode(DEGREES);
  // set up canvases
  pixelDensity(1); // account for high-density displays
  containerSize = select("#canvasContainer").size();
  canvas = createCanvas(containerSize.width + extraWidth, containerSize.height + extraHeight); // 2D mode
  document.getElementById(canvas.id()).onclick = aboutMeClose;
  document.getElementById("pic").onclick = function(e) {
    e.stopPropagation();
  }
  document.getElementById("socials").onclick = function(e) {
    e.stopPropagation();
  }
  document.getElementById("bio").onclick = function(e) {
    e.stopPropagation();
  }
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  projectLink = createA("", "LINK", "_blank"); // initialize this here
  projectLink.style("position", "absolute");
  projectLink.style("font-size", "0pt"); // this has to be like this so that the page doesn't display weird on mobile
  projectLink.style("opacity", "0");
  projectLink.position(width, height);

  // scale interface
  scale = min(canvas.width, canvas.height) / 680;
  scaleInterface();
  canvas.parent("canvasContainer");
  background(col1); // initialize
  masker = createGraphics(500, 500); // for masking thumbnails
  feedbackMasker = createGraphics(min(width, height), min(width, height));
  prepJsonObj(jsonObj, thumbnails); // load and mask thumbnails
  jsonObj.open = true; // open the main folder

  windowResized(); // call this i guess. stuff gotta scale correctly.
}








function draw() {

  background(col1); // clear

  // position the camera
  let histSize = history.length;
  if(histSize > 0) {
    cam.targetX = history[histSize -1].x;
    cam.targetY = history[histSize -1].y;
    // offset camera when project view is open
    if(projectInFocus != 0) {
      if(projectInFocus.focusing) cam.targetY += scale * 20;
    }
  }
  else {
    cam.targetX = 0;
    cam.targetY = 0;
  }
  xa = centerX - cam.x;
  ya = centerY - cam.y;
  cam.x += (cam.targetX - cam.x) / cam.smoothing;
  cam.y += (cam.targetY - cam.y) / cam.smoothing;

  //cam.angle += .25;

  // draw tiling background image
  push();
  for(let y = -1; y < canvas.height / gridDispersion10; y++) {
    for(let x = -1; x < canvas.width / gridDispersion10; x++) {
      // honestly i'm not sure how this works... the image itself is 481x481, but it only works if i draw it at 371x371.
      // if you need to adjust this at all, screenshot a 10x10 group of dots at 80% zoom on the webpage.
      image(bgImg, (x + .05) * gridDispersion10 - (cam.x * .5) % gridDispersion10, (y + .05) * gridDispersion10 - (cam.y * .5) % gridDispersion10, gridDispersion10 + 1, gridDispersion10 + 1);
    }
  }
  // original drawing code
  //stroke(col5Arr[0], col5Arr[1], col5Arr[2], 127);
  //strokeWeight(gridWeight);
  //for(let y = -1; y < canvas.height / gridDispersion + 1; y++) {
  //  for(let x = -1; x < canvas.width / gridDispersion + 1; x++) {
  //    point((x + .5) * gridDispersion - (cam.x * .5) % gridDispersion, (y + .5) * gridDispersion - (cam.y * .5) % gridDispersion);
  //  }
  //}
  pop();

  strokeJoin(ROUND);
  recursiveLoop(jsonObj, jsonObj); // call recursive processing loop on folder hierarchy
  processProjectInFocus(projectInFocus);
  // draw project in focus on top of interface
  if(projectInFocus != 0) {
    drawProjectInFocus(projectInFocus);
  }

  // i had to draw the gradients inside out and backwards in order to get an exponential slope
  gradient(0, 20, canvas.width, 20, color(0, 0, 0, 127), color(0, 0, 0, 0), -1);
  gradient(0, canvas.height - 20, canvas.width, 20, color(0, 0, 0, 127), color(0, 0, 0, 0), 1);



  // feedback thumbnail
  if(oneLemonVisible) {
    let canvasPix;
    if(width >= height) {
      canvasPix = canvas.get(floor((width - height) / 2), 0, height, height); // load window pixels
    } 
    else {
      canvasPix = canvas.get(0, floor((height - width) / 2), width, width); // load window pixels
    }
    canvasPix.mask(feedbackMasker);
    thumbnails["one-lemon"] = canvasPix;
    oneLemonVisible = false; // this gets set to true in processSelf() if Web Design is open.
  }





  mClick = false; // capture this here in case the user clicked on nothing
  if(mobile) {
    if(tapTimer < tapWindow) {
      tapTimer++;
    }
    else if(tapTimer < tapWindow + 1) {
      tapTimer++;
      mouseX = 0;
      mouseY = 0;
    }
  }
}
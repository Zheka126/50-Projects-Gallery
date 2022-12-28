const navData = [
  '01 Expanding Cards',
  '02 Progress Steps',
  '03 Rotating Navigation Animation',
  '04 Hidden Search Widget',
  '05 Blurry Loading',
  '06 Scroll Animation',
  '07 Split Landing Page',
  '08 Form Wave',
  '09 Sound Board',
  '10 Dad Jokes',
  '11 Event Keycodes',
  '12 Faq Collapse',
  '13 Random Choice Picker',
  '14 Animated Navigation',
  '15 Incrementing Counter',
  '16 Drink Water',
  '17 Movie App',
  '18 Background Slider',
  '19 Theme Clock',
  '20 Button Ripple Effect',
  '21 Drag N Drop',
  '22 Drawing App',
  '23 Kinetic Loader',
  '24 Content Placeholder',
  '25 Sticky Navbar',
  '26 Double Vertical Slider',
  '27 Toast Notification',
  '28 Github Profiles',
  '29 Double Click Heart',
  '30 Auto Text Effect',
  '31 Password Generator',
  '32 Good Cheap Fast',
  '33 Notes App',
  '34 Animated Countdown',
  '35 Image Carousel',
  '36 Hoverboard',
  '37 Pokedex',
  '38 Mobile Tab Navigation',
  '39 Password Strength Background',
  '40 3d Background Boxes',
  '41 Verify Account Ui',
  '42 Live User Filter',
  '43 Feedback Ui Design',
  '44 Custom Range Slider',
  '45 Netflix Mobile Navigation',
  '46 Quiz App',
  '47 Testimonial Box Switcher',
  '48 Random Image Feed',
  '49 Todo List',
  '50 Insect Catch Game',
];

const search = document.querySelector('.search');
const navbar = document.querySelector('.navbar');
const list = navbar.querySelector('ul');
const listItems = [];

search.addEventListener('input', (e) => filterData(e.target.value));

for (let i = 0; i < navData.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = `<a href="#${i + 1}">${navData[i]}</a>`;
  list.appendChild(li);
  listItems.push(li);
}

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}

const videos = document.querySelector('.videos');

for (let i = 1; i <= 50; i++) {
  if (i == 24) {
    insertImg();
  } else {
    insertVideo(i);
  }
  insertMej();
}

function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

function insertImg() {
  const img = document.createElement('img');
  img.src = '24.jpg';
  img.style.width = '70%';
  videos.appendChild(img);
}

function insertMej() {
  const div = document.createElement('div');
  div.classList.add('mej');
  videos.appendChild(div);
}

function insertVideo(i) {
  const video = document.createElement('video');
  setAttributes(video, {
    src: `videos/${i}.mp4`,
    id: i,
    loop: 'true',
    muted: 'true',
  });
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  videos.appendChild(video);
}

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
  toggle.querySelector('.line1').classList.toggle('scrutL');
  toggle.querySelector('.line2').classList.toggle('scrutR');
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});

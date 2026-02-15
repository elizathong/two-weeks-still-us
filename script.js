// ===== LETTERS CONTENT =====
const letters = [
  // Day 1 — Feb 15	
`hey love,

i made this for you so that even when we’re apart, you’ll still feel me close 🤍
every time we’re away from each other, we somehow end up arguing 😬 and i think it’s just because we both miss each other more than we realise and we expect love differently from each other. so i hope these little letters can reassure you every day that i love you and that i’m here.

you’re probably already in thailand when you read this. if not, i hope you have a safe flight and enjoy your trip with your fam!

so… this is us, starting two weeks apart. we did it before, and i’m sure we’ll get through it again, one day at a time. if you miss me at any point during your day, you can open an envelope for the day 😊

i’ll still update you whenever i turn on my data, and i hope you’ll update me as much as you can too. i’ll be waiting for your messages/long messages when i finally turn my data back on :p they always make my day.

i love you.`,

  // Day 2 — Feb 16
`Today is my turn to fly! ✈️ to Nippon

Your first full day in Thailand! 

Since you're in thailand! Can i give you some mini challenges? hahaha dont worry if you dont want to do it, its just so i am in your mind all day 😏 hehe 

1st mini challenge for the day! Eat something spicy for me bahahaha take a vid if u want to show me heheheh 

if not maybe just take a picture of something delicious you had during the day :p

Other than that, go have some really yummy thai food 🤤

i love you`,

  // Day 3 — Feb 17
`were you tired cause i was in your mind the whole day yesterday? 😏

today's another day for a mini challenge! Snap 3 photos of anything blue and share why you chose them!

No flirting with girls in Thailand. I have spies. 🕵️‍♀️

just reminding you, i love you ❤️`,

// Day 4 — Feb 18

`Not sure what time of the day you will open this but good morning or good afternoon or good evening or good night! haha

Wonder what you will be doing today, have you smoked weed with your parents? haha hope it was a good session smoking weed with ur parents and maybe with kay ti? haha

While I was writing day 4 for you, this was a song playing in the background. I think it's a good vibe song 🎶

You can listen to it if you want 🎧 

<iframe style="border-radius:12px"
src="https://open.spotify.com/embed/track/5Ai1xBdEWnP99udbOaWbc2"
width="100%" height="80"
frameBorder="0"
allowfullscreen=""
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
</iframe>`,

  // Day 5 — Feb 19
`wahhh 5 days passed really quickly! It's time for you to fly home, hope you had a great time in Hat Yai 😄 Have a safe flight back!`,

  // Day 6 — Feb 20
`it's friyay! you just got back from thailand, hope you arent too tired and you have to work today huhu

hope work today isn't too blue, 1 day of work then the weekend!

if you are feeling blue, here is a little funny photo faces of us haha 
<br>
<img src="assets/funny.jpg"
     alt="funny us"
     style="width:160px; border-radius:10px; display:block; margin:10px auto;">
     
     you always only smileeeee, lousyyy, only when i ask u to funny face, you funny face >< i kinda like this photo of us heh`,
  
// Day 7 — Feb 21
`Halfway there biii!!! 🤍

It's my bro's birthday today!!! woohoo he big boi`,

// Day 8 — Feb 22
`I wonder where I will be on this day. Wherever it is, know that you're still in my heart. ewwww hahhaa siiick`,

// Day 9 — Feb 23
`Running out of ideas hahaha 

I really want to travel with youuu and i cant wait to go to places with youuu.

But i think i do have a little fear travelling with you haha. maybe, i'm scared our travelling styles wont match 😐	haha we will seeee when the day comes 👀

One day closer to us...`,

// Day 10 — Feb 24
`If today feels heavy, remember:

You’re stronger than you think.

And I’m always on your side. I’m grateful for you.

<br><br>
<img src="https://media.tenor.com/7Tq6K8L8ZtIAAAAC/cosytales-cute-kawaii-adorable-lovers.gif" 
     alt="cute hug" 
     style="max-width:100%; border-radius:12px;">`,

// Day 11 — Feb 25
`i wonder if we fought already or like got annoyed at each other liao... 😬 hahaha if you did or we have, i'm sorry bb. Hope you forgive me.`,

// Day 12 — Feb 26
`thank you for loving me. I know this journey hasn't been easy for you. sorry if you ever feel like it was hard to love me. :(

writing this after the day we fought till 3am... sighhhhhhh i still feel kinda heavy but hopefully after meeting you later, i will feel better.

rushing to finish up this project for you before you go off haha`,

// Day 13 — Feb 27
`I can’t wait to see you.`,

// Day 14 — Feb 28
`I'm coming back today! See you soon, my love 🤍`
];

// ===== BUILD ENVELOPES =====
const grid = document.getElementById('grid');

const startDate = new Date("2026-02-15T00:00:00");

letters.forEach((text, i) => {
  const env = document.createElement('div');
  env.className = 'envelope';

  env.innerHTML = `<img src="assets/envelope.png" class="envelope-img">`;

  const label = document.createElement('div');
  label.className = 'label';
  label.innerText = `Feb ${15 + i}`;

  const wrap = document.createElement('div');
  wrap.appendChild(env);
  wrap.appendChild(label);

// Compute unlock date for this envelope
const unlockDate = new Date(startDate);
unlockDate.setDate(startDate.getDate() + i);

// Get today’s date (ignore time)
const today = new Date();
today.setHours(0, 0, 0, 0);

if (today >= unlockDate) {
  // ✅ UNLOCKED
  env.onclick = () => openModal(text);
} else {
  // 🔒 LOCKED
  env.style.opacity = "0.4";
  env.style.cursor = "not-allowed";
  label.innerText += " 🔒";
}

  grid.appendChild(wrap);
});

// ===== MODAL FUNCTIONS =====
function openModal(text, index) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');

  modalText.innerHTML = text;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}
